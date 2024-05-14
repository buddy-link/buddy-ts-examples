import { useConnection } from "@solana/wallet-adapter-react";
import {
	getProfileAccounts,
	getWalletSummary,
	unwrapProfileAccountData,
	useBuddyState,
} from "buddy.link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
	ProfileAccountInfo,
	ProfileData,
	WalletDetails,
	SerializedData,
} from "../ui/Tables/types";
import { MEMBER_ITEMS_PER_PAGE } from "../lib/constants";
import Loader from "./Loader";

const ProfileTable = () => {
	const { connection } = useConnection();
	const [data, setData] = useState<[]>([]);
	const [profiler, setProfiler] = useState<WalletDetails | null>(null);
	const [loadingSerializer, setLoadingSerializer] = useState(true);
	const [profileName] = useBuddyState("PROFILE_NAME");

	const [profilesPage, setProfilesPage] = useState(0);
	const [pageProfilesParsed, setPageProfilesParsed] = useState<
		SerializedData[]
	>([]);

	useEffect(() => {
		getProfileAccounts(connection).then((data) => {
			setData(data as []);
		});
	}, [connection]);

	console.log(data);

	const handleNavigateProfiles = useCallback((type: "prev" | "next") => {
		if (type === "prev") {
			setProfilesPage((prevPage) => Math.max(prevPage - 1, 0));
		} else if (type === "next") {
			setProfilesPage((prevPage) => prevPage + 1);
		}
	}, []);

	const serializeProfile = useCallback(
		async (
			profileData: unknown,
			profilePubkey: string
		): Promise<SerializedData> => {
			const profile = unwrapProfileAccountData(profileData);

			return {
				profile,
				publicKey: profilePubkey,
			};
		},
		[]
	);

	const referralsCount = useMemo(
		() =>
			profiler !== null &&
			profiler.referrals.reduce(
				(acc: { [key: string]: number }, curr) => {
					const organization = curr.parsedData.organization;
					if (acc[organization]) {
						acc[organization] += 1;
					} else {
						acc[organization] = 1;
					}
					return acc;
				},
				{}
			),
		[profiler]
	);

	const uniqueOrganizations = Object.keys(referralsCount);

	useEffect(() => {
		const startIndex = profilesPage * MEMBER_ITEMS_PER_PAGE;
		const searchRegex = new RegExp(`.*${profileName}.*`, "i");

		const filteredProfiles = data?.filter((item: ProfileAccountInfo) => {
			const nameMatch = searchRegex.test(item?.parsedData?.name || "");
			const publicKeyMatch = searchRegex.test(
				item?.pubkey?.toBase58() || ""
			);
			return nameMatch || publicKeyMatch;
		});

		const pageProfiles = filteredProfiles.slice(
			startIndex,
			startIndex + MEMBER_ITEMS_PER_PAGE
		);

		const getProfiles = async (): Promise<SerializedData[]> => {
			setLoadingSerializer(true);
			const profileDataPromises = pageProfiles.map(
				async (profile: ProfileAccountInfo) => {
					const profileData = await connection.getAccountInfo(
						profile.pubkey
					);
					if (!profileData) {
						throw new Error("Profile data not found");
					}
					return serializeProfile(
						profileData.data,
						profile?.pubkey.toBase58()
					);
				}
			);

			try {
				const profiles = await Promise.all(profileDataPromises);
				setPageProfilesParsed(profiles);
				return profiles;
			} catch (error) {
				console.error("Error fetching profile data:", error);
				throw error;
			} finally {
				setLoadingSerializer(false);
			}
		};

		getProfiles();
	}, [connection, data, profilesPage, profileName, serializeProfile]);

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
							Profile
						</th>
						<th align="right" className="px-6">
							PublicKey
						</th>
						<th align="right" className="px-6">
							Wallet
						</th>
					</tr>
				</thead>
				<tbody>
					{pageProfilesParsed.map(
						(item: SerializedData, index: number) => (
							<tr
								key={item.publicKey}
								className={`py-2 px-6 hover:bg-primary hover:text-primary-dark cursor-pointer ${
									index % 2 ? "bg-primary-dark" : ""
								} ${
									profiler &&
									profiler.profiles[0].pubkey.toBase58() ===
										item.publicKey &&
									`bg-primary/80`
								}`}
								onClick={async () => {
									const orgs = await getWalletSummary(
										connection,
										item.profile.authority,
										{ profileName: item.profile.name }
									);

									console.log(orgs);

									return setProfiler(orgs);
								}}
							>
								<td align="left" className={`py-2 px-6 `}>
									<>
										<div className="flex items-center justify-start gap-2 whitespace-nowrap">
											{`${item.profile.name.slice(
												0,
												4
											)}...${item.profile.name.slice(
												-4
											)}`}
										</div>
									</>
								</td>
								<td align="right" className={`py-2 px-6 `}>
									<>
										<div className="flex items-center justify-end gap-2">
											{`${item.publicKey.slice(
												0,
												4
											)}...${item.publicKey.slice(-4)}`}
										</div>
									</>
								</td>
								<td align="right" className={`py-2 px-6 `}>
									<>
										<div className="flex items-center justify-end gap-2">
											{`${item.profile.authority
												.toBase58()
												.slice(
													0,
													4
												)}...${item.profile.authority
												.toBase58()
												.slice(-4)}`}
										</div>
									</>
								</td>
							</tr>
						)
					)}
					<tr className="">
						<td className="w-full " colSpan={2}>
							<div className="flex gap-2 items-center justify-center lg:justify-end w-full pt-4">
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() =>
										handleNavigateProfiles("prev")
									}
									disabled={profilesPage === 0}
								>
									Prev
								</button>
								<span>/</span>
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() =>
										handleNavigateProfiles("next")
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
			{profiler && (
				<div className="flex flex-col px-3 gap-4">
					<div className="flex flex-col gap-2 ">
						<h3 className="font-bold text-sm lg:text-base">
							Profile
						</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col">
								<span className="px-2 py-[1px] rounded-lg">
									Name:
								</span>
								<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
									{profiler.profiles[0].parsedData.name}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="px-2 py-[1px] rounded-lg">
									Treasury Count:
								</span>
								<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
									{profiler.treasuries.length}
								</span>
							</div>
						</div>
						<div className="flex flex-col">
							<span className="px-2 py-[1px] rounded-lg">
								Public Key:
							</span>
							<a
								className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start gap-2 hover:bg-primary hover:text-primary-dark"
								href={`https://solscan.io/account/${profiler.profiles[0].pubkey.toBase58()}`}
								rel="noreferrer"
								target="_blank"
							>
								{profiler.profiles[0].pubkey.toBase58()}
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
							className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start gap-2 hover:bg-primary hover:text-primary-dark"
							href={`https://solscan.io/account/${profiler.wallet.toBase58()}`}
							rel="noreferrer"
							target="_blank"
						>
							{profiler.wallet.toBase58()}
							<img
								src="/solscan-logo.png"
								alt="Solscan"
								className="w-4 h-4"
							/>
						</a>
					</div>
					<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-sm lg:text-base">
							Organizations
						</h3>
						<div className="flex gap-2 items-center justify-start w-full flex-wrap">
							{profiler.members.map((member) => (
								<div
									key={member.pubkey.toBase58()}
									className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start w-fit"
								>
									{member.parsedData.organization}
								</div>
							))}
							{/* <img
								src="/solscan-logo.png"
								alt="Solscan"
								className="w-4 h-4"
							/> */}
						</div>
						<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
						<div className="flex flex-col gap-2">
							<h3 className="font-bold text-sm lg:text-base">
								Referrals
							</h3>
							<div className="flex gap-2 items-center justify-start w-full flex-wrap">
								{uniqueOrganizations.map((organization) => (
									<div
										key={organization}
										className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start w-fit"
									>
										{organization}:{" "}
										{referralsCount[organization]}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileTable;
