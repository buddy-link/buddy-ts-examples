import { useMemo } from "react";
import EmptyState from "../../components/EmptyState";
import OrganizationTable from "../../components/OrganizationTable";
import Search from "../../components/Search";
import { useBuddyState } from "buddy.link";
import moment from "moment";
import MembersTable, { MemberTableRow } from "../../components/MembersTable";
import { slice } from "lodash";

const Organization = () => {
  const [organization] = useBuddyState("BUDDY_ORGANIZATION");
  const [members] = useBuddyState("BUDDY_MEMBERS");
  const [loading] = useBuddyState("BUDDY_LOADING");
  const [organizationName] = useBuddyState("ORGANIZATION_NAME");

  const organizationData = useMemo<{ key: string; value: string }[]>(
    () => [
      {
        key: "Name",
        value: organization?.account?.name,
      },
      {
        key: "PDA",
        value: organization?.account?.pda.toBase58(),
        link: `https://solscan.io/account/${organization?.account?.pda.toBase58()}`
      },
      {
        key: "Ambassador",
        value: organization?.account?.ambassador.toBase58() == '11111111111111111111111111111111' ? 'none' : organization?.account?.ambassador.toBase58(),
      }, 
      {
        key: "Authority",
        value: organization?.account?.authority.toBase58(),
        link: `https://solscan.io/token/${organization?.account?.authority.toBase58()}`
      },
      {
        key: "Main Token Mint",
        value: organization?.account?.mainTokenMint.toBase58(),
        link: `https://solscan.io/token/${organization?.account?.mainTokenMint.toBase58()}`
      },
      {
        key: "Padding",
        value: new TextDecoder().decode(organization?.account?.padding),
      },
      {
        key: "Members",
        value: members?.length,
      },
      {
        key: "Required volume for rewards",
        value: organization?.account?.volumeRequiredForRewards.toString(),
      },
      {
        key: "Date created",
        value: moment(
          Number(organization?.account?.dateCreated.toString()) * 1000
        ).format("D MMM YYYY"),
      },
    ],
    [organization, members]
  );

  const membersData = useMemo<MemberTableRow[]>(() => {
    if (!members?.length) return [];

    return slice(members, 0, 10).map((item) => {
      return {
        //@ts-expect-error types still WIP
        profile: item?.account?.name || '',
        member: "-",
        treasuryCount: 1,
      };
    });
  }, [members]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Search />
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
                <MembersTable data={membersData} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Organization;
