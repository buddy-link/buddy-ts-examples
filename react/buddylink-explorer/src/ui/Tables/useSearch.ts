import { useBuddyState } from "buddy.link";
import _ from "lodash";
import { useCallback, useRef, useState } from "react";

const useSearch = () => {
	const [, setOrganizationName] = useBuddyState("ORGANIZATION_NAME");
	const [, setSearchMemberName] = useBuddyState("SEARCH_MEMBER_NAME");

	const [organizationValue, setOrganizationValue] = useState("");
	const [memberName, setMemberName] = useState("");

	const debouncedSearch = useRef(
		_.debounce(
			(
				setter: React.Dispatch<React.SetStateAction<string>>,
				value: string
			) => {
				setter(value);
			},
			1000
		)
	).current;

	const handleOrganizationNameChange = useCallback(
		(organizationName: string) => {
			setOrganizationValue(organizationName);
			debouncedSearch(setOrganizationName, organizationName);
		},
		[debouncedSearch, setOrganizationName]
	);

	const handleMemberNameChange = useCallback(
		(memberName: string) => {
			setMemberName(memberName);
			debouncedSearch(setSearchMemberName, memberName);
		},
		[debouncedSearch, setSearchMemberName]
	);

	return {
		organizationValue,
		handleOrganizationNameChange,
		memberName,
		handleMemberNameChange,
	};
};

export default useSearch;
