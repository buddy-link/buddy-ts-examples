import Search from "../../components/Search";
import { useBuddyState } from "buddy.link";
import useSearch from "./useSearch";
// import useData from "./useData";
import { useCallback, useState } from "react";
import { RadioSelectorType } from "./types";
import TableProvider from "../../components/TableProvider";

const Tables = () => {
	// const [organization] = useBuddyState("BUDDY_ORGANIZATION");
	const [members] = useBuddyState("BUDDY_MEMBERS");
	// const [loading] = useBuddyState("BUDDY_LOADING");
	// const [organizationName] = useBuddyState("ORGANIZATION_NAME");

	const [radioStatus, setRadioStatus] = useState(
		RadioSelectorType.Organization
	);

	const {
		organizationValue,
		handleOrganizationNameChange,
		memberName,
		handleMemberNameChange,
	} = useSearch();

	// const {
	// 	organizationData,
	// 	membersData,
	// 	membersPage,
	// 	handleNavigateMembers,
	// } = useData({
	// 	memberName,
	// });

	const handleInputChange = useCallback(
		(value: string) => {
			if (radioStatus === RadioSelectorType.Organization) {
				return handleOrganizationNameChange(value);
			}
			if (radioStatus === RadioSelectorType.Member) {
				return console.log("Member");
			}
			if (radioStatus === RadioSelectorType.Wallet) {
				return console.log("Wallet");
			}
			if (radioStatus === RadioSelectorType.Profile) {
				return console.log("Profile");
			}

			return console.log("No radio status");
		},
		[radioStatus, handleOrganizationNameChange]
	);

	return (
		<div className="flex flex-col items-center gap-4">
			<div className={`w-full flex gap-4`}>
				<Search
					title={`Search for ${radioStatus}`}
					inputPlaceholder="Org name (i.e. laddercaster, staratlas, elementerra)"
					inputValue={organizationValue}
					onInputChange={(event) =>
						handleInputChange(event.target.value)
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
				<TableProvider selectedTable={radioStatus} />
			</div>
		</div>
	);
};

export default Tables;
