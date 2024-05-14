import {
	getTreasuryAccounts,
	unwrapProfileAccountData,
	// getProfileAccounts,
	// getTreasuryAccounts,
	unwrapTreasuryAccountData,
	useBuddyState,
} from "buddy.link";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PublicKey } from "@solana/web3.js";

import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import {
	MemberAccountInfo,
	ProfileData,
	SerializedData,
	TreasuryData,
} from "./types";
import { OrganizationTableRow } from "../../components/types";
import { useConnection } from "@solana/wallet-adapter-react";

const useData = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const [orgMember] = useBuddyState("ORG_MEMBER_NAME");
	const [loadingSerializer, setLoadingSerializer] = useState(true);

	const [membersPage, setMembersPage] = useState(0);
	const [pageMembersParsed, setPageMembersParsed] = useState<
		SerializedData[]
	>([]);

	const { connection } = useConnection();

	const serializeMember = useCallback(
		(
			profile: ProfileData,
			member: MemberAccountInfo & { publicKey: PublicKey },
			treasury: TreasuryData[]
		) => {
			return {
				profile: profile,

				member: member?.account,

				treasuryCount: treasury.length,

				publicKey: member?.publicKey.toBase58(),
			};
		},
		[]
	);

	useEffect(() => {
		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;
		const pageMembers = members
			?.slice(startIndex, startIndex + MEMBER_ITEMS_PER_PAGE)
			.filter((item: { account: { name: string; profile: string } }) => {
				const searchRegex = new RegExp(`.*${orgMember}.*`, "i");
				const nameResult = searchRegex.test(item?.account?.name);

				return nameResult;
			});

		console.log("pageMembers: ", pageMembers);

		const getTreasury = async (): Promise<SerializedData[]> => {
			setLoadingSerializer(true);
			const memberDataPromises = pageMembers.map(
				async (
					member: MemberAccountInfo & { publicKey: PublicKey }
				) => {
					// Fetch owner account info and unwrap in parallel
					const ownerPromise = connection.getAccountInfo(
						member?.account?.owner
					);
					return ownerPromise.then((owner) => {
						if (!owner) {
							throw new Error("Owner not found");
						}

						const ownerTreasury = unwrapTreasuryAccountData(
							owner.data
						);

						// Fetch profile data and unwrap
						return connection
							.getAccountInfo(ownerTreasury.owners[0].owner)
							.then((profileData) => {
								if (!profileData) {
									throw new Error("Profile data not found");
								}

								const profile = unwrapProfileAccountData(
									profileData.data
								);

								return getTreasuryAccounts(connection, {
									owner: ownerTreasury.owners[0].owner,
								}).then((treasury) => {
									return serializeMember(
										profile,
										member,
										treasury
									);
								});
							});
					});
				}
			);

			try {
				// Wait for all promises to resolve
				const Response = await Promise.all(memberDataPromises);

				console.log("Response: ", Response);

				// Update page members parsed
				setPageMembersParsed(Response);
				return Response;
			} catch (error) {
				console.error("Error fetching treasury data:", error);
				throw error; // Propagate the error
			} finally {
				setLoadingSerializer(false);
			}
		};

		getTreasury();

		console.log("members: ", members);
	}, [connection, orgMember, members, membersPage, serializeMember]);

	const organizationData = useMemo<OrganizationTableRow[]>(
		() => [
			{
				key: "Name",
				value: organization?.account?.name,
			},
			{
				key: "PDA",
				value: organization?.account?.pda.toBase58(),
				link: `https://solscan.io/account/${organization?.account?.pda.toBase58()}`,
			},
			{
				key: "Ambassador",
				value:
					organization?.account?.ambassador.toBase58() ==
					"11111111111111111111111111111111"
						? "none"
						: organization?.account?.ambassador.toBase58(),
			},
			{
				key: "Authority",
				value: organization?.account?.authority.toBase58(),
				link: `https://solscan.io/token/${organization?.account?.authority.toBase58()}`,
			},
			{
				key: "Main Token Mint",
				value: organization?.account?.mainTokenMint.toBase58(),
				link: `https://solscan.io/token/${organization?.account?.mainTokenMint.toBase58()}`,
			},
			{
				key: "Padding",
				value: new TextDecoder().decode(organization?.account?.padding),
			},
			{
				key: "Members",
				value: members?.length,
			},
			// TODO: Test and validate volumeRequiredForRewards
			// {
			//   key: "Required volume for rewards",
			//   value: organization?.account?.volumeRequiredForRewards.toString(),
			// },
			{
				key: "Date created",
				value: moment(
					Number(organization?.account?.dateCreated.toString()) * 1000
				).format("D MMM YYYY"),
			},
		],
		[organization, members]
	);

	const membersData = useMemo<SerializedData[]>(() => {
		if (!members?.length) return [];

		// if (searchMemberName.length) {
		// 	const searchRegex = new RegExp(`.*${searchMemberName}.*`, "i");
		// 	console.log("searchRegex: ", searchRegex);

		// 	console.log("member name useData: ", searchMemberName);

		// 	return members
		// 		.slice(0, MEMBER_ITEMS_PER_PAGE)
		// .filter((item: unknown) => {
		// 	// @ts-expect-error types still WIP
		// 	return searchRegex.test(item?.account?.name);
		// })
		// 		.map(serializeMember);
		// }

		// const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;

		return pageMembersParsed;
	}, [members?.length, pageMembersParsed]);

	const handleNavigateMembers = (type: "prev" | "next") => {
		if (type === "prev") {
			setMembersPage((prevPage) => prevPage - 1);
		}

		if (type === "next") {
			setMembersPage((prevPage) => prevPage + 1);
		}
	};

	return {
		organizationData,
		membersData,
		membersPage,
		handleNavigateMembers,
		loadingSerializer,
	};
};

export default useData;
