import { useBuddyState } from "buddy.link";
import EmptyState from "../EmptyState";
import useData from "../../ui/Tables/useData";
import OrganizationDetails from "./OrganizationDetails";
import MemberSection from "./MemberSection";

const OrganizationTable = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [loading] = useBuddyState("BUDDY_LOADING");
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");

	const {
		organizationData,
		membersData,
		membersPage,
		handleNavigateMembers,
		loadingSerializer,
	} = useData();

	if (!organizationName) {
		return (
			<EmptyState
				title="Enter Organization Name"
				description="Start exploring by typing the name of an organization"
				imagePath="/no-search.svg"
			/>
		);
	}

	if (loading.isLoadingOrganization && !organization) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="loader" />
			</div>
		);
	}

	if (!loading.isLoadingOrganization && !organization) {
		return (
			<EmptyState
				title="Organization Not Found"
				description="Oops! We couldn't find any information for the entered organization. Please check the name and try again."
				imagePath="/no-result.svg"
			/>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[20fr,1fr,20fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10">
			<OrganizationDetails organizationData={organizationData} />
			<Divider />
			<MemberSection
				membersData={membersData}
				isLoading={loading.isLoadingMembers || loadingSerializer}
				membersPage={membersPage}
				handleNavigateMembers={handleNavigateMembers}
			/>
		</div>
	);
};

const Divider = () => (
	<>
		<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
		<span className="w-full h-[1px] bg-[#F6F7F7] block lg:hidden my-auto"></span>
	</>
);

export default OrganizationTable;
