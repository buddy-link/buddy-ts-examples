import { useBuddyState } from "buddy.link";
import moment from "moment";
import { useMemo, useState } from "react";
import { MemberTableRow } from "../../components/MembersTable";
import { OrganizationTableRow } from "../../components/OrganizationTable";
import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";

interface Props {
	memberName: string;
}
const useData = ({ memberName }: Props) => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const [membersPage, setMembersPage] = useState(0);

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

	const serializedMembers = (member: unknown) => ({
		profile: "-",
		// @ts-expect-error types still WIP
		member: member?.account?.name || "",
		treasuryCount: 1,
		// @ts-expect-error types still WIP
		publicKey: member?.publicKey.toBase58(),
	});

	const membersData = useMemo<MemberTableRow[]>(() => {
		if (!members?.length) return [];

		if (memberName.length) {
			const searchRegex = new RegExp(`.*${memberName}.*`, "i");
			return members
				.slice(0, MEMBER_ITEMS_PER_PAGE)
				.filter((item: unknown) => {
					// @ts-expect-error types still WIP
					return searchRegex.test(item?.account?.name);
				})
				.map(serializedMembers);
		}

		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;

		return members
			.slice(startIndex, startIndex + MEMBER_ITEMS_PER_PAGE)
			.map(serializedMembers);
	}, [memberName, members, membersPage]);

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
