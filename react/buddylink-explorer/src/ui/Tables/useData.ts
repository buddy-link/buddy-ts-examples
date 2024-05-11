import { useBuddyState } from "buddy.link";
import moment from "moment";
import { useCallback, useMemo, useState } from "react";
import { MemberTableRow } from "../../components/MembersTable";

import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import { serializedMemberType } from "./types";
import { OrganizationTableRow } from "../../components/types";
// import useSearch from "./useSearch";
// import { useConnection } from "@solana/wallet-adapter-react";

// interface Props {
// 	memberName: string;
// }

const useData = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const [searchMemberName] = useBuddyState("SEARCH_MEMBER_NAME");

	const [membersPage, setMembersPage] = useState(0);

	console.log("member name useData1: ", searchMemberName);

	// const [serializedMembers, setSerializedMembers] = useState<
	// 	serializedMemberType[]
	// >([]);

	// const { connection } = useConnection();

	// const pageMembers = useMemo(() => {
	// 	const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;

	// 	return members
	// 		?.slice(startIndex, startIndex + MEMBER_ITEMS_PER_PAGE)
	// 		.slice(0, MEMBER_ITEMS_PER_PAGE);
	// }, [members, membersPage]);

	// useEffect(() => {
	// 	const getTreasury = async () => {
	// 		for (const member of pageMembers) {
	// 			const acc = await connection.getAccountInfo(
	// 				member.account.owner
	// 			);

	// 			console.log("acc: ", acc);

	// 			// Decoder para converter bytes em strings, assumindo UTF-8
	// 			const extractPublicKey = (start: any, end: any) => {
	// 				const publicKeyBytes = acc?.data.subarray(start, end) ?? [];
	// 				// Converter cada byte em uma string hexadecimal
	// 				return Array.from(publicKeyBytes)
	// 					.map((byte) => byte.toString(16).padStart(2, "0"))
	// 					.join("")
	// 					.replace(/^0+/, "");
	// 			};

	// 			// Offsets dos owners e o tamanho fixo de cada PublicKey
	// 			const ownerOffsets = [55, 121, 187, 251];
	// 			const publicKeySize = 32; // Supondo 32 bytes por PublicKey

	// 			// Extrair cada PublicKey baseado no offset e no tamanho fixo
	// 			const owners = ownerOffsets
	// 				.map((offset) => {
	// 					return extractPublicKey(offset, offset + publicKeySize);
	// 				})
	// 				.filter((owner) => owner);

	// 			console.log("Owners PublicKeys:", owners);

	// 			const res = await getTreasuryAccounts(connection, {
	// 				owner: acc?.owner.toBase58(),
	// 			});
	// 			console.log("member: ", member.publicKey.toBase58());
	// 			console.log("treasury: ", res);
	// 		}
	// 	};
	// 	getTreasury();

	// 	console.log("members: ", members);
	// }, [connection, members, pageMembers]);

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

	const serializeMember = useCallback(
		(member: unknown): serializedMemberType => {
			return {
				profile: "-",
				// @ts-expect-error types still WIP
				member: member?.account?.name || "",
				treasuryCount: 1,
				// @ts-expect-error types still WIP
				publicKey: member?.publicKey.toBase58(),
			};
		},
		[]
	);

	const membersData = useMemo<MemberTableRow[]>(() => {
		if (!members?.length) return [];

		if (searchMemberName.length) {
			const searchRegex = new RegExp(`.*${searchMemberName}.*`, "i");
			console.log("searchRegex: ", searchRegex);

			console.log("member name useData: ", searchMemberName);

			return members
				.slice(0, MEMBER_ITEMS_PER_PAGE)
				.filter((item: unknown) => {
					// @ts-expect-error types still WIP
					return searchRegex.test(item?.account?.name);
				})
				.map(serializeMember);
		}

		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;

		return members
			?.slice(startIndex, startIndex + MEMBER_ITEMS_PER_PAGE)
			.slice(0, MEMBER_ITEMS_PER_PAGE)
			.map(serializeMember);
	}, [searchMemberName, members, membersPage, serializeMember]);

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
	};
};

export default useData;
