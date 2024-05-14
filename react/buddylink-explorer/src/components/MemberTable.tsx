import { useConnection } from "@solana/wallet-adapter-react";
import {
	getMemberAccounts,
	unwrapProfileAccountData,
	unwrapTreasuryAccountData,
	useBuddyState,
} from "buddy.link";
import { useCallback, useEffect, useState } from "react";
import { serializedMemberType } from "../ui/Tables/types";
import { MEMBER_ITEMS_PER_PAGE } from "../lib/constants";
import Loader from "./Loader";

const MemberTable = () => {
	const { connection } = useConnection();
	const [data, setData] = useState<[]>([]);
	const [member, setMember] = useState<serializedMemberType | null>(null);
	const [loadingSerializer, setLoadingSerializer] = useState(true);
	const [memberName] = useBuddyState("MEMBER_NAME");

	const [membersPage, setMembersPage] = useState(0);
	const [pageMembersParsed, setPageMembersParsed] = useState<
		serializedMemberType[]
	>([]);

	useEffect(() => {
		getMemberAccounts(connection).then((data) => {
			setData(data as []);
		});
	}, [connection]);

	const handleNavigateMembers = useCallback((type: "prev" | "next") => {
		if (type === "prev") {
			setMembersPage((prevPage) => Math.max(prevPage - 1, 0));
		} else if (type === "next") {
			setMembersPage((prevPage) => prevPage + 1);
		}
	}, []);

	const serializeMember = useCallback(
		(
			profile: unknown,
			member: unknown,
			treasury: unknown,
			profilePubkey: string
		): serializedMemberType => {
			return {
				profile,
				member,
				treasuryCount: treasury.owners.filter(
					(owner: unknown) => owner?.share > 0
				).length,
				publicKey: member?.pubkey.toBase58(),
				profilePubkey,
			};
		},
		[]
	);

	useEffect(() => {
		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;
		const searchRegex = new RegExp(`.*${memberName}.*`, "i");

		const filteredMembers = data?.filter((item: any) => {
			const nameMatch = searchRegex.test(item?.parsedData?.name || "");
			const publicKeyMatch = searchRegex.test(
				item?.pubkey?.toBase58() || ""
			);
			return nameMatch || publicKeyMatch;
		});

		const pageMembers = filteredMembers.slice(
			startIndex,
			startIndex + MEMBER_ITEMS_PER_PAGE
		);

		const getTreasury = async (): Promise<serializedMemberType[]> => {
			setLoadingSerializer(true);
			const memberDataPromises = pageMembers.map(async (member: any) => {
				const ownerPromise = connection.getAccountInfo(
					member?.parsedData?.owner
				);

				return ownerPromise.then((owner) => {
					if (!owner) {
						throw new Error("Owner not found");
					}

					const ownerTreasury = unwrapTreasuryAccountData(owner.data);

					return connection
						.getAccountInfo(ownerTreasury.owners[0].owner)
						.then((profileData) => {
							if (!profileData) {
								throw new Error("Profile data not found");
							}

							const profile = unwrapProfileAccountData(
								profileData.data
							);
							console.log("profile", profile);

							return serializeMember(
								profile,
								member,
								ownerTreasury,
								ownerTreasury.owners[0].owner.toBase58()
							);
						});
				});
			});

			try {
				const membersw = await Promise.all(memberDataPromises);
				setPageMembersParsed(membersw);
				return membersw;
			} catch (error) {
				console.error("Error fetching treasury data:", error);
				throw error;
			} finally {
				setLoadingSerializer(false);
			}
		};

		getTreasury();
	}, [connection, data, membersPage, memberName, serializeMember]);

	if (loadingSerializer) {
		return (
			<div className="p-4 h-36 flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1  lg:grid-cols-[20fr,1fr,20fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10">
			<table className="w-full text-xs lg:text-base">
				<thead>
					<tr className="text-sm lg:text-base">
						<th align="left" className="px-6">
							Member
						</th>
						<th align="right" className="px-6">
							Organization
						</th>
						<th align="right" className="px-6 ">
							Profile
						</th>
						<th align="right" className="px-6">
							Wallet
						</th>
					</tr>
				</thead>
				<tbody>
					{pageMembersParsed.map((item, index) => (
						<tr
							key={item.publicKey}
							className={`py-2 px-6 hover:bg-primary hover:text-primary-dark cursor-pointer ${
								index % 2 ? "bg-primary-dark" : ""
							} ${
								member?.publicKey === item.publicKey &&
								`bg-primary/80`
							}`}
							onClick={() => setMember(item)}
						>
							<td align="left" className={`py-2 px-6 `}>
								<>
									<div className="flex  items-center justify-start gap-2 whitespace-nowrap">
										{item.member.parsedData.name.length > 1
											? `${item.member.parsedData.name.slice(
													0,
													4
											  )}... ${item.member.parsedData.name.slice(
													-4
											  )}`
											: item.member.parsedData.name}
									</div>
									{/* <div className="hidden xl:flex items-center justify-center gap-2">
										{item.member.parsedData.name}
									</div> */}
								</>
							</td>
							<td align="right" className={`py-2 px-6 `}>
								<>
									<div className="flex  items-center justify-end gap-2 whitespace-nowrap">
										{item.member.parsedData.organization
											.length > 1
											? `${item.member.parsedData.organization.slice(
													0,
													4
											  )}...${item.member.parsedData.organization.slice(
													-4
											  )}`
											: item.member.parsedData
													.organization}
									</div>
									{/* <div className="hidden xl:flex items-center justify-end gap-2">
										{item.member.parsedData.organization}
									</div> */}
								</>
							</td>
							<td align="right" className={`py-2 px-6 `}>
								<>
									<div className="flex  items-center justify-end gap-2 whitespace-nowrap">
										{item.profile.name.length > 1
											? `${item.profile.name.slice(
													0,
													4
											  )}...${item.profile.name.slice(
													-4
											  )}`
											: item.profile.name}
									</div>
									{/* <div className="hidden xl:flex items-center justify-center gap-2">
										{item.profile.name}
									</div> */}
								</>
							</td>
							<td align="right" className={`py-2 px-6 `}>
								<>
									<div className="flex  items-center justify-center gap-2">
										{item.profile.authority.toBase58()
											.length > 1
											? `${item.profile.authority
													.toBase58()
													.slice(
														0,
														4
													)}...${item.profile.authority
													.toBase58()
													.slice(-4)}`
											: item.profile.authority.toBase58()}
									</div>
									{/* <div className="hidden xl:flex items-center justify-center gap-2">
										{item.profile.authority.toBase58()}
									</div> */}
								</>
							</td>
						</tr>
					))}
					<tr className="">
						<td className=" w-full " colSpan={5}>
							<div className="flex gap-2 items-center justify-center lg:justify-end w-full pt-4">
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() =>
										handleNavigateMembers("prev")
									}
									disabled={membersPage === 0}
								>
									Prev
								</button>
								<span>/</span>
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() =>
										handleNavigateMembers("next")
									}
									disabled={
										data.length < MEMBER_ITEMS_PER_PAGE
									}
								>
									Next
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
			{member && (
				<div className="flex flex-col px-3 gap-4">
					<div className="flex flex-col gap-2 ">
						<h3 className="font-bold text-sm lg:text-base">
							Member
						</h3>
						<div className="flex flex-col">
							<span className="px-2 py-[1px] rounded-lg">
								name:
							</span>
							<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
								{member.member.parsedData.name}
							</span>
						</div>
						<div className="flex flex-col">
							<span className="px-2 py-[1px] rounded-lg">
								PublicKey:
							</span>
							<a
								className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-dark"
								href={`https://solscan.io/account/${member.publicKey}`}
								rel="noreferrer"
								target="_blank"
							>
								{member.publicKey}
								<img
									src="/solscan-logo.png"
									alt="Solscan"
									className="w-4 h-4"
								/>
							</a>
						</div>
						<div className="grid grid-cols-2 gap-3">
							<div className="flex flex-col">
								<span className=" px-2 py-[1px] rounded-lg">
									Organization:
								</span>
								<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
									{member.member.parsedData.organization}
								</span>
							</div>
							<div className=" flex flex-col">
								<span className="px-2 py-[1px] rounded-lg">
									Treasury Count:
								</span>
								<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
									{member.treasuryCount}
								</span>
							</div>
						</div>
					</div>
					<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
					<div className=" flex flex-col gap-2">
						<h3 className="font-bold text-sm lg:text-base">
							Profile
						</h3>
						<div className="flex flex-col">
							<span className="b px-2 py-[1px] rounded-lg">
								name:
							</span>
							<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
								{member.profile.name}
							</span>
						</div>
						<div className=" flex flex-col">
							<span className=" px-2 py-[1px] rounded-lg">
								PublicKey:
							</span>
							<a
								className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-dark"
								href={`https://solscan.io/account/${member.profilePubkey}`}
								rel="noreferrer"
								target="_blank"
							>
								{member.profilePubkey}
								<img
									src="/solscan-logo.png"
									alt="Solscan"
									className="w-4 h-4"
								/>
							</a>
						</div>
					</div>
					<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-sm lg:text-base">
							Wallet
						</h3>

						<a
							className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-dark"
							href={`https://solscan.io/account/${member.profile.authority.toBase58()}`}
							rel="noreferrer"
							target="_blank"
						>
							{member.profile.authority.toBase58()}
							<img
								src="/solscan-logo.png"
								alt="Solscan"
								className="w-4 h-4"
							/>
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default MemberTable;
