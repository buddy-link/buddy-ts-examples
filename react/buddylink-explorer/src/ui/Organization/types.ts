export enum RadioSelectorType {
	Organization = "organizations",
	Member = "members",
}

export type serializedMemberType = {
	profile: string;
	member: string;
	treasuryCount: number;
	publicKey: string;
};
