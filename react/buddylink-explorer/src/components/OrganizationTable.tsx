import { useBuddyState } from "buddy.link";
import MembersTable from "./MembersTable";
import EmptyState from "./EmptyState";
import useData from "../ui/Tables/useData";
import useSearch from "../ui/Tables/useSearch";

const OrganizationTable = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	// const [members] = useBuddyState("BUDDY_MEMBERS");
	const [loading] = useBuddyState("BUDDY_LOADING");
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");

	const { memberName } = useSearch();

	const {
		organizationData,
		membersData,
		membersPage,
		handleNavigateMembers,
	} = useData({
		memberName,
	});

	return (
		<>
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

							<table className="w-full">
								<tbody>
									{organizationData.map((item, index) => {
										return (
											<tr key={item.key}>
												<td
													className={`py-2 px-4 rounded-l-md ${
														index % 2
															? "bg-primary-dark"
															: ""
													}`}
												>
													{item.key}:
												</td>
												<td
													className={`py-2 px-4 rounded-r-md ${
														index % 2
															? "bg-primary-dark"
															: ""
													} ${
														item.link
															? "hover:bg-primary hover:text-primary-dark"
															: ""
													}`}
												>
													{item.link ? (
														<a
															href={item.link}
															target="_blank"
															className="flex gap-2 items-center justify-start "
														>
															{` 
                 
                  ${item.value.slice(0, 6)}...${item.value.slice(-6)} `}

															<img
																src="/solscan-logo.png"
																alt="Solscan"
																className="w-4 h-4"
															/>
														</a>
													) : (
														item.value
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
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
		</>
	);
};

export default OrganizationTable;
