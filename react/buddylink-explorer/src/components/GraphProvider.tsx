import { RadioSelectorType } from "../ui/Tables/types";
import DefaultGraph from "./DefaultGraph";
import OrganizationGraph from "./OrganizationGraph";
import ProfileGraph from "./ProfileGraph";
import MemberGraph from "./MemberGraph";
import useSearch from "../ui/Tables/useSearch";

interface Props {
	selectedGraph: RadioSelectorType;
}

const GraphProvider = ({ selectedGraph }: Props) => {
	const { values } = useSearch();

	// if (
	// 	(selectedGraph === RadioSelectorType.Organization && values.organizationValue == '')
	// ) {
	// 	return (
	// 	<div className="h-96">
	// 		<span> All Organizations </span>
	// 		<DefaultGraph />
	// 	</div>
	// 	);
	// }
	if (selectedGraph === RadioSelectorType.Organization) {
		return (
			<div className="h-96">
				<span> Members of Organization </span>
				<OrganizationGraph />
			</div>
		);
	}
	if (selectedGraph === RadioSelectorType.Member) {
		return (
			<div className="h-96">
				<span> Map of Referrals for Member </span>
				<MemberGraph />
			</div>
		);
	}

	if (selectedGraph === RadioSelectorType.Profile) {
		return (
			<div className="h-96">
				<span> Map of Accounts for Profile/Wallet </span>
				<ProfileGraph />
			</div>
		);
	}
	return <span>Something went wrong!</span>;
};

export default GraphProvider;
