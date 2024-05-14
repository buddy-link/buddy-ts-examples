import { useBuddyState } from "buddy.link";
import MembersTable from "./MembersTable";
import EmptyState from "./EmptyState";
// import useSearch from "../ui/Tables/useSearch";
import useData from "../ui/Tables/useData";

const OrganizationTable = () => {
	const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	// const [members] = useBuddyState("BUDDY_MEMBERS");
	const [loading] = useBuddyState("BUDDY_LOADING");
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");

	// const { memberName } = useSearch();

	const {
		organizationData,
		membersData,
		membersPage,
		handleNavigateMembers,
		loadingSerializer,
	} = useData();

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
					<div className="grid grid-cols-1  lg:grid-cols-[20fr,1fr,20fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10">
						<div>
							<h2 className="text-lg md:text-2xl font-bold text-primary">
								Details
							</h2>

							<table className="w-full text-xs md:text-base">
								<tbody>
									{organizationData.map((item, index) => {
										return (
											<tr key={item.key}>
												<td
													className={`py-2 px-2 md:px-4 rounded-l-md ${
														index % 2
															? "bg-primary-dark"
															: ""
													}`}
												>
													{item.key}:
												</td>
												<td
													className={`py-2 px-2 md:px-4 rounded-r-md ${
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
																className="w-3 h-3 md:w-4 md:h-4"
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
						<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
						<span className="w-full h-[1px] bg-[#F6F7F7] block lg:hidden mx=y-auto"></span>
						<div>
							<h2 className="text-2xl font-bold text-primary">
								Members
							</h2>

							<div className=" overflow-x-auto max-w-full">
								<MembersTable
									data={membersData}
									isLoading={
										loading.isLoadingMembers ||
										loadingSerializer
									}
									page={membersPage}
									onNavigate={handleNavigateMembers}
								/>
							</div>
						</div>
					</div>
				)}
		</>
	);
};

export default OrganizationTable;
