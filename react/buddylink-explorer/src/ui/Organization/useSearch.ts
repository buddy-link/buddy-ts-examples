import { useBuddyState } from "buddy.link";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const useSearch = () => {
	const [, setOrganizationName] = useBuddyState("ORGANIZATION_NAME");

	const [organizationValue, setOrganizationValue] = useState("");
	const [memberName, setMemberName] = useState("");

	const debouncedSearch = useRef(
		_.debounce((cb: () => void) => cb(), 1000)
	).current;

	const handleOrganizationNameChange = (organizationName: string) => {
		setOrganizationValue(organizationName);
	};

	const handleMemberNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMemberName(e.target.value);
	};

	useEffect(() => {
		debouncedSearch(() => setOrganizationName(organizationValue));
	}, [debouncedSearch, setOrganizationName, organizationValue]);

	return {
		organizationValue,
		handleOrganizationNameChange,
		memberName,
		handleMemberNameChange,
	};
};

export default useSearch;
