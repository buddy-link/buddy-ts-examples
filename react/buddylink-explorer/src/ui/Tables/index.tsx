import React, { useCallback, useEffect, useMemo, useState } from "react";
import Search from "../../components/Search";
import { useBuddyState, getOrganizationAccounts } from "buddy.link";
import useSearch from "./useSearch";
import { OrganizationAccountInfo, RadioSelectorType } from "./types";
import TableProvider from "../../components/TableProvider";
import { useConnection } from "@solana/wallet-adapter-react";

const Tables = () => {
	const [members] = useBuddyState("BUDDY_MEMBERS");
	const { connection } = useConnection();
	const [orgNameList, setOrgNameList] = useState<string[]>([]);
	const [radioStatus, setRadioStatus] = useState(
		RadioSelectorType.Organization
	);

	const { handleChange, values } = useSearch();

	const chips = useMemo(() => {
		const regex = new RegExp(values.organizationValue, "i");
		return orgNameList.filter((org) => regex.test(org));
	}, [orgNameList, values.organizationValue]);

	const handleInputChange = useCallback(
		(value: string) => {
			switch (radioStatus) {
				case RadioSelectorType.Organization:
					handleChange("organizationValue", value);
					break;
				case RadioSelectorType.Member:
					handleChange("memberName", value);
					break;

				case RadioSelectorType.Profile:
					handleChange("profile", value);
					break;
				default:
					console.log("No radio status");
			}
		},
		[radioStatus, handleChange]
	);

	useEffect(() => {
		const fetchOrgsName = async () => {
			const orgs = await getOrganizationAccounts(connection);

			console.log(orgs);

			const orgNamesArray = orgs.map((org: OrganizationAccountInfo) => {
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
				<Search<RadioSelectorType>
					title={`Search for ${radioStatus}`}
					inputPlaceholder="Org name (i.e. laddercaster, staratlas, elementerra)"
					inputValue={
						radioStatus === RadioSelectorType.Organization
							? values.organizationValue
							: radioStatus === RadioSelectorType.Member
							? values.memberName
							: radioStatus === RadioSelectorType.Profile
							? values.profile
							: ""
					}
					onInputChange={(event) =>
						handleInputChange(event.target.value)
					}
					radioValue={radioStatus}
					changeRadioStatus={setRadioStatus}
					chips={
						radioStatus === RadioSelectorType.Organization
							? chips
							: []
					}
					onChipClick={handleInputChange}
				/>
				{members && members.length > 0 && (
					<Search<RadioSelectorType>
						title="Search for member"
						inputPlaceholder="Member name"
						inputValue={values.orgMember}
						onInputChange={(event) =>
							handleChange("orgMember", event.target.value)
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
