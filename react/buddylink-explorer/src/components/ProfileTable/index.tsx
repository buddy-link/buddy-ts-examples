/* eslint-disable no-mixed-spaces-and-tabs */
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
	WalletDetails,
	SerializedData,
} from "../../ui/Tables/types";
import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import Loader from "../Loader";
import ProfileDetails from "./ProfileDetails";

const ProfileTable = () => {
	const { connection } = useConnection();
	const [data, setData] = useState<ProfileAccountInfo[]>([]);
	const [profiler, setProfiler] = useState<WalletDetails | null>(null);
	const [loadingSerializer, setLoadingSerializer] = useState(true);
	const [isSummaryLoading, setIsSummaryLoading] = useState(false);
	const [profileName] = useBuddyState("PROFILE_NAME");

	const [profilesPage, setProfilesPage] = useState(0);
	const [pageProfilesParsed, setPageProfilesParsed] = useState<
		SerializedData[]
	>([]);
	const [profileCount, setProfileCount] = useState(0);

	useEffect(() => {
		const fetchProfileAccounts = async () => {
			const accounts = await getProfileAccounts(connection);
			setData(accounts as ProfileAccountInfo[]);
		};

		fetchProfileAccounts();
	}, [connection]);

	const handleNavigateProfiles = useCallback((type: "prev" | "next") => {
		setProfilesPage((prevPage) =>
			type === "prev" ? Math.max(prevPage - 1, 0) : prevPage + 1
		);
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

	const referralsCount = useMemo(() => {
		if (!profiler) return {};

		return profiler.referrals.reduce(
			(acc: { [key: string]: number }, curr) => {
				const organization = curr.parsedData.organization;
				acc[organization] = (acc[organization] || 0) + 1;
				return acc;
			},
			{}
		);
	}, [profiler]);

	const uniqueOrganizations = useMemo(
		() => Object.keys(referralsCount),
		[referralsCount]
	);

	useEffect(() => {
		const startIndex = profilesPage * MEMBER_ITEMS_PER_PAGE;
		const searchRegex = new RegExp(`.*${profileName}.*`, "i");

		const filteredProfiles = data.filter((item) => {
			const nameMatch = searchRegex.test(item?.parsedData?.name || "");
			const publicKeyMatch = searchRegex.test(
				item?.pubkey?.toBase58() || ""
			);
			const walletMatch = searchRegex.test(
				item?.parsedData?.authority?.toBase58() || ""
			);
			return nameMatch || publicKeyMatch || walletMatch;
		});
		setProfileCount(filteredProfiles?.length || 0)

		const pageProfiles = filteredProfiles.slice(
			startIndex,
			startIndex + MEMBER_ITEMS_PER_PAGE
		);

		const getProfiles = async () => {
			setLoadingSerializer(true);
			try {
				const profiles = await Promise.all(
					pageProfiles.map(async (profile) => {
						const profileData = await connection.getAccountInfo(
							profile.pubkey
						);
						if (!profileData)
							throw new Error("Profile data not found");
						return serializeProfile(
							profileData.data,
							profile.pubkey.toBase58()
						);
					})
				);
				setPageProfilesParsed(profiles);
			} catch (error) {
				console.error("Error fetching profile data:", error);
			} finally {
				setLoadingSerializer(false);
			}
		};

		getProfiles();
	}, [connection, data, profilesPage, profileName, serializeProfile]);

	if (loadingSerializer || !data.length) {
		return (
			<div className="p-4 h-36 flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[15fr,1fr,20fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10 ">
			<div className="overflow-auto max-w-[100vw] pb-4 flex items-center justify-start">
				<table className=" w-full text-xs 2xl:text-base ">
					<thead>
						<tr className="text-sm 2xl:text-base">
							<th align="left" className="px-5">
								Profile
							</th>
							<th align="right" className="px-5">
								PublicKey
							</th>
							<th align="right" className="px-5">
								Wallet
							</th>
						</tr>
					</thead>
					<tbody>
						{pageProfilesParsed.map((item, index) => (
							<tr
								key={item.publicKey}
								className={`py-2 px-5 hover:bg-primary hover:text-primary-dark cursor-pointer ${
									index % 2 ? "bg-primary-dark" : ""
								} ${
									profiler &&
									profiler.profiles[0].pubkey.toBase58() ===
										item.publicKey
										? "bg-primary/80"
										: ""
								}`}
								onClick={async () => {
									if (!item.profile) return;

									if (
										profiler &&
										profiler.profiles[0].pubkey.toBase58() ===
											item.publicKey
									) {
										setProfiler(null);
									} else {
										setIsSummaryLoading(true);
										const summary = await getWalletSummary(
											connection,
											item.profile.authority,
											{ profileName: item.profile.name }
										);
										setProfiler(summary as WalletDetails);
										setIsSummaryLoading(false);
									}
								}}
							>
								<td align="left" className="py-2 px-5">
									<div className="flex items-center justify-start gap-2 whitespace-nowrap">
										{item.profile
											? `${item.profile.name.slice(
													0,
													4
											  )}...${item.profile.name.slice(
													-4
											  )}`
											: "-"}
									</div>
								</td>
								<td align="right" className="py-2 px-5">
									<div className="flex items-center justify-end gap-2">
										{item.publicKey
											? `${item.publicKey.slice(
													0,
													4
											  )}...${item.publicKey.slice(-4)}`
											: "-"}
									</div>
								</td>
								<td align="right" className="py-2 px-5">
									<div className="flex items-center justify-end gap-2">
										{item.profile
											? `${item.profile.authority
													.toBase58()
													.slice(
														0,
														4
													)}...${item.profile.authority
													.toBase58()
													.slice(-4)}`
											: "-"}
									</div>
								</td>
							</tr>
						))}
						<tr>
						<td colSpan={1} className="w-full">
							<div className="flex gap-2 items-center justify-start w-full pt-4">
								{`Profiles found: ${profileCount || 0} of ${data.length}`}
							</div>
						</td>
							<td colSpan={2} className="w-full">
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
			</div>
			<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
			{isSummaryLoading ? (
				<div className="p-4 h-36 flex items-center justify-center">
					<Loader />
				</div>
			) : profiler ? (
				<ProfileDetails
					profiler={profiler}
					referralsCount={referralsCount}
					uniqueOrganizations={uniqueOrganizations}
				/>
			) : null}
		</div>
	);
};

export default ProfileTable;
