import EmptyState from "../../components/EmptyState";
import OrganizationTable from "../../components/OrganizationTable";
import Search from "../../components/Search";
import { useBuddyState } from "buddy.link";
import MembersTable from "../../components/MembersTable";
import useSearch from "./useSearch";
import useData from "./useData";

const Organization = () => {
  const [organization] = useBuddyState("BUDDY_ORGANIZATION");
  const [members] = useBuddyState("BUDDY_MEMBERS");
  const [loading] = useBuddyState("BUDDY_LOADING");
  const [organizationName] = useBuddyState("ORGANIZATION_NAME");

  const {
    organizationValue,
    handleOrganizationNameChange,
    memberName,
    handleMemberNameChange,
  } = useSearch();

  const { organizationData, membersData, membersPage, handleNavigateMembers } =
    useData({
      memberName,
    });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`w-full flex gap-4`}>
        <Search
          title="Search for organization"
          inputPlaceholder="Org name (i.e. laddercaster, staratlas, elementerra)"
          inputValue={organizationValue}
          onInputChange={handleOrganizationNameChange}
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
                <h2 className="text-2xl font-bold text-primary">Details</h2>
                <OrganizationTable data={organizationData} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Members</h2>
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