import { useBuddyState, getTreasuryAccounts } from "buddy.link";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { MemberTableRow } from "../../components/MembersTable";
import { OrganizationTableRow } from "../../components/OrganizationTable";
import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import { useConnection } from "@solana/wallet-adapter-react";

interface Props {
	memberName: string;
}

type serializedMemberType = {
	profile: string;
	member: string;
	treasuryCount: number;
	publicKey: string;
};

const useData = ({ memberName }: Props) => {
	const { connection } = useConnection();
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const [treasuries] = useBuddyState("BUDDY_TREASURIES");
	const [profile] = useBuddyState("BUDDY_PROFILE");
	const [client] = useBuddyState("BUDDY_CLIENT");

	const [serializedMembers, setSerializedMembers] = useState<
		serializedMemberType[]
	>([]);

	// const [, setBuddyMember] = useBuddyState("BUDDY_MEMBER");
	const [membersPage, setMembersPage] = useState(0);

	const displayedMembers = useMemo(() => {
		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;

		return members?.slice(startIndex, startIndex + MEMBER_ITEMS_PER_PAGE);
	}, [members, membersPage]);

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

	// useEffect(() => {
	// 	const fetchMembersData = async (displayedMembers: unknown) => {
	// 		for (const member of displayedMembers) {
	// 			const treasuryPDA = member.account.owner;
	// 			const treasuryAccount = await connection.getAccountInfo(
	// 				treasuryPDA
	// 			);
	// 			// const profilePDA = treasuryAccount?.data;

	// 			// console.log("profilePDA: ", profilePDA);

	// 			// const profileAccount = connection.getAccountInfo(profilePDA);
	// 			// const profilePublicKey = profileAccount.account.authority;

	// 			const Alltreasuries = getTreasuryAccounts(connection, {
	// 				owner: profilePDA,
	// 			});

	// 			console.log("treasury: ", Alltreasuries);

	// 			const serializedMember = serializeMember(mem);

	// 			setSerializedMembers((prev) => [...prev, serializedMember]);
	// 		}

	// 		return;
	// 	};

	// setSerializedMembers(fetchMembersData(members));

	// 	fetchMembersData(displayedMembers);
	// }, [connection, displayedMembers, members]);

	const serializeMember = (member: unknown) => {
		// console.log("member: ", member);
		// console.log("treasuries: ", treasuries);
		// console.log("profile: ", profile);
		// console.log("client: ", client);

		// console.log("member: ", member.account.owner);

		// const treasuryPDA = member.account.owner;

		// console.log("treasuryPDA: ", treasuryPDA);

		// const treasuryAccount = await connection.getAccountInfo(treasuryPDA);
		// const profilePDA = treasuryAccount?.data;

		// // console.log("profilePDA: ", profilePDA);

		// // const profileAccount = connection.getAccountInfo(profilePDA);
		// // const profilePublicKey = profileAccount.account.authority;

		// const Alltreasuries = getTreasuryAccounts(connection, {
		// 	owner: profilePDA,
		// });

		// console.log("treasury: ", Alltreasuries);

		// setBuddyMember(member?.account?.name ?? "");
		// console.log("buddy member: ", bmember);

		return {
			profile: "-",
			// @ts-expect-error types still WIP
			member: member?.account?.name || "",
			treasuryCount: 1,
			// @ts-expect-error types still WIP
			publicKey: member?.publicKey.toBase58(),
		};
	};

	const membersData = useMemo<MemberTableRow[]>(() => {
		if (!members?.length) return [];

		if (memberName.length) {
			const searchRegex = new RegExp(`.*${memberName}.*`, "i");
			return serializedMembers
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
	}, [memberName, members, membersPage, serializedMembers]);

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
