import { RadioSelectorType } from "../ui/Tables/types";
import MemberTable from "./MemberTable";
import OrganizationTable from "./OrganizationTable";
import ProfileTable from "./ProfileTable";
import WalletTable from "./WalletTable";

interface Props {
	selectedTable: RadioSelectorType;
}

const TableProvider = ({ selectedTable }: Props) => {
	if (selectedTable === RadioSelectorType.Organization) {
		return <OrganizationTable />;
	}
	if (selectedTable === RadioSelectorType.Member) {
		return <MemberTable />;
	}
	if (selectedTable === RadioSelectorType.Wallet) {
		return <WalletTable />;
	}
	if (selectedTable === RadioSelectorType.Profile) {
		return <ProfileTable />;
	}
	return <span>Something went wrong!</span>;
};

export default TableProvider;
