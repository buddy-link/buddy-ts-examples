import { useBuddyState } from "buddy.link";
import _ from "lodash";
import { useCallback, useMemo, useState, useRef } from "react";

const useSearch = () => {
	const [organizationValue, setOrganizationValue] =
		useBuddyState("ORGANIZATION_NAME");
	const [memberName, setMemberName] = useBuddyState("MEMBER_NAME");
	const [wallet, setWallet] = useBuddyState("WALLET_NAME");
	const [profile, setProfile] = useBuddyState("PROFILE_NAME");

	const [searchTerm, setSearchTerm] = useState({
		organizationValue,
		memberName,
		wallet,
		profile,
	});

	const setters = useMemo(
		() => ({
			organizationValue: setOrganizationValue,
			memberName: setMemberName,
			wallet: setWallet,
			profile: setProfile,
		}),
		[setOrganizationValue, setMemberName, setWallet, setProfile]
	);

	const debouncedUpdate = useRef(
		_.debounce((key: keyof typeof setters, value: string) => {
			setters[key](value);
		}, 700)
	).current;

	const handleChange = useCallback(
		(key: keyof typeof searchTerm, value: string) => {
			setSearchTerm((prev) => ({
				...prev,
				[key]: value,
			}));
			debouncedUpdate(key, value);
		},
		[debouncedUpdate]
	);

	return {
		values: searchTerm,
		handleChange,
	};
};

export default useSearch;
