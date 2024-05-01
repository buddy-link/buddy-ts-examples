export enum RadioSelectorType {
	Organization = "Organization",
	Member = "Member",
	Wallet = "Wallet",
	Profile = "Profile",
}

export type serializedMemberType = {
	profile: string;
	member: string;
	treasuryCount: number;
	publicKey: string;
};
