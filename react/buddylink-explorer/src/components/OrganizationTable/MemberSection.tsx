import { SerializedData } from "../../ui/Tables/types";
import MembersTable from "../MembersTable";

const MemberSection = ({
	membersData,
	isLoading,
	membersPage,
	handleNavigateMembers,
}: {
	membersData: SerializedData[];
	isLoading: boolean;
	membersPage: number;
	handleNavigateMembers: (type: "prev" | "next") => void;
}) => (
	<div>
		<h2 className="text-2xl font-bold text-primary">Members</h2>
		<div className="overflow-x-auto max-w-full">
			<MembersTable
				data={membersData}
				isLoading={isLoading}
				page={membersPage}
				onNavigate={handleNavigateMembers}
			/>
		</div>
	</div>
);

export default MemberSection;
