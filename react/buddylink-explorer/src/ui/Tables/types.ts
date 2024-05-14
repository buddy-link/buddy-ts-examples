export enum RadioSelectorType {
	Organization = "Organization",
	Member = "Member",
	Wallet = "Wallet",
	Profile = "Profile",
}

export type serializedMemberType = {
	profile?: unknown;
	member?: unknown;
	treasuryCount?: number;
	publicKey?: string;
	profilePubkey?: string;
};
