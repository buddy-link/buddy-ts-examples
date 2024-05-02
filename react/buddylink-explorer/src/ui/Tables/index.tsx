import Search from "../../components/Search";
import { useBuddyState, getOrganizationAccounts } from "buddy.link";
import useSearch from "./useSearch";
// import useData from "./useData";
import { useCallback, useEffect, useMemo, useState } from "react";
import { RadioSelectorType } from "./types";
import TableProvider from "../../components/TableProvider";
import { useConnection } from "@solana/wallet-adapter-react";

const Tables = () => {
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const { connection } = useConnection();
	const [orgNameList, setOrgNameList] = useState<string[]>([]);
	// const [, setOrganizationName] = useBuddyState("ORGANIZATION_NAME");

	const [radioStatus, setRadioStatus] = useState(
		RadioSelectorType.Organization
	);

	const {
		organizationValue,
		handleOrganizationNameChange,
		memberName,
		handleMemberNameChange,
	} = useSearch();

	const chips = useMemo(() => {
		const regex = new RegExp(organizationValue, "i");
		//TODO: change array bellow to getOrganizations parsed output
		return orgNameList.filter((org) => regex.test(org));
	}, [orgNameList, organizationValue]);

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

	useEffect(() => {
		const fetchOrgNames = async () => {
			const orgs = await getOrganizationAccounts(connection);

			//Getting the name of the organization inside account.data bytes
			const orgNamesArray = orgs.map((org) => {
				const data = org.account.data;
				const nameBytes = data.subarray(53, 93);
				const nameDecoder = new TextDecoder("utf-8");
				const name = nameDecoder.decode(nameBytes);

				console.log(name);
				//remove null characters from the end of the string
				// eslint-disable-next-line no-control-regex
				return name.replace(/[\x00]+$/g, "");
			});

			console.log(orgNamesArray);

			setOrgNameList(orgNamesArray);
		};

		fetchOrgNames();
	}, [connection]);

	return (
		<div className="flex flex-col items-center gap-4 px-5">
			<div className={`w-full grid lg:grid-cols-2 gap-4`}>
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
					chips={chips}
					onChipClick={(value) => handleInputChange(value)}
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
			<div className="w-full bg-[#282828] p-3 md:p-4 rounded-md">
				<TableProvider selectedTable={radioStatus} />
			</div>
		</div>
	);
};

export default Tables;
