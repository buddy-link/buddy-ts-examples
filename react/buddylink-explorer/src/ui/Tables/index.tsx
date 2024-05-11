import Search from "../../components/Search";
import { useBuddyState, getOrganizationAccounts } from "buddy.link";
import useSearch from "./useSearch";
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

	console.log("member name Index: ", memberName);

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
		const fetchOrgsName = async () => {
			const orgs = await getOrganizationAccounts(connection);

			const orgNamesArray = orgs.map((org) => {
				//eslint-disable-next-line
				//@ts-ignore
				const orgName = org.parsedData.name;
				return orgName;
			});
			setOrgNameList(orgNamesArray);
		};

		fetchOrgsName();
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
						onInputChange={(event) =>
							handleMemberNameChange(event.target.value)
						}
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
