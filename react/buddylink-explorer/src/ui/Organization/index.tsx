import EmptyState from "../../components/EmptyState";
import OrganizationTable from "../../components/OrganizationTable";
import Search from "../../components/Search";
import {
	useBuddyState,
	getMemberAccounts,
	getTreasuryAccounts,
	getOrganizationAccounts,
	getProfileAccounts,
} from "buddy.link";
import MembersTable from "../../components/MembersTable";
import useSearch from "./useSearch";
import useData from "./useData";
import { useEffect, useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import useChips from "./useChips";

export enum RadioSelectorType {
	Organization = "organizations",
	Member = "members",
}

const Organization = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	// const [profiles] = useBuddyState("BUDDY_PROFILE");
	const [loading] = useBuddyState("BUDDY_LOADING");
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");
	const { connection } = useConnection();

	const [radioStatus, setRadioStatus] = useState(
		RadioSelectorType.Organization
	);

	// const [wallet] = useBuddyState("BUDDY_WALLET");

	// console.log("Org: ", organization, organizationName);
	// console.log("Members: ", members);
	// console.log("Profiles: ", profiles);

	const {
		organizationValue,
		handleOrganizationNameChange,
		memberName,
		handleMemberNameChange,
	} = useSearch();

	const {
		organizationData,
		membersData,
		membersPage,
		handleNavigateMembers,
	} = useData({
		memberName,
	});

	// useEffect(() => {
	// 	const fetchOrg = async () => {
	// 		const orgs = await getOrganizationAccounts(connection);

	// 		console.log("orgs: ", orgs);

	// 		for (const org in orgs) {

	// 			console.log("org: ", orgs[org].account.data.toString("hex"));

	// 			const parsed = await connection.getParsedAccountInfo(
	// 				org.pubkey
	// 			);
	// 			console.log("parsed: ", parsed);
	// 		}

	// 		// const orgs = await getOrganizationAccounts(connection);
	// 		console.log(
	// 			"orgs: ",
	// 			orgs.map((org) => {
	// 				console.log("org: ", org.account.data.toString("hex"));

	// 				const byteArray = new Uint8Array(org.account.data);
	// 				const decoder = new TextDecoder();
	// 				const decodedData = decoder.decode(byteArray);

	// 				return decodedData;
	// 			})
	// 		);

	// 		const profiles = await getProfileAccounts(connection);
	// 		console.log(
	// 			"profiles: ",
	// 			profiles.map((profile) => profile.account)
	// 		);
	// 	};

	// 	fetchOrg();
	// }, [connection]);

	// console.log("members Data: ", membersData);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className={`w-full flex gap-4`}>
				<Search
					title="Search for organization"
					inputPlaceholder="Org name (i.e. laddercaster, staratlas, elementerra)"
					inputValue={organizationValue}
					onInputChange={(event) =>
						handleOrganizationNameChange(event.target.value)
					}
					radioValue={radioStatus}
					changeRadioStatus={(value: RadioSelectorType) =>
						setRadioStatus(value)
					}
					chips={["staratlas", "laddercaster", "elementerra"]}
					onChipClick={handleOrganizationNameChange}
				/>
				{members && members.length > 0 && (
					<Search
						title="Search for member"
						inputPlaceholder="Member name"
						inputValue={memberName}
						onInputChange={handleMemberNameChange}
					/>
				)}
			</div>
			<div className="w-full bg-[#282828] p-4 rounded-md">
				{!organizationName && (
					<EmptyState
						title="Enter Organization Name"
						description="Start exploring by typing the name of an organization"
						imagePath="/no-search.svg"
					/>
				)}
				{!loading.isLoadingOrganization &&
					!organization &&
					organizationName.length > 0 && (
						<EmptyState
							title="Organization Not Found"
							description="Oops! We couldn't find any information for the entered organization. Please check the name and try again."
							imagePath="/no-result.svg"
						/>
					)}
				{loading.isLoadingOrganization && !organization && (
					<div className="flex items-center justify-center py-12">
						<div className="loader" />
					</div>
				)}
				{!loading.isLoadingOrganization &&
					organization !== null &&
					organizationName.length > 0 && (
						<div className="grid grid-cols-2 gap-3">
							<div className="border-r border-[#F6F7F7] mr-3 pr-3">
								<h2 className="text-2xl font-bold text-primary">
									Details
								</h2>
								<OrganizationTable data={organizationData} />
							</div>
							<div>
								<h2 className="text-2xl font-bold text-primary">
									Members
								</h2>
								<MembersTable
									data={membersData}
									isLoading={loading.isLoadingMembers}
									page={membersPage}
									onNavigate={handleNavigateMembers}
								/>
							</div>
						</div>
					)}
			</div>
		</div>
	);
};

export default Organization;
