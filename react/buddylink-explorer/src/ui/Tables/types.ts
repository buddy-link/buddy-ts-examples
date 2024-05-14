import { PublicKey } from "@solana/web3.js";

export type BufferData = {
	type: "Buffer";
	data: number[];
};

export type Account = {
	data: BufferData;
	executable: boolean;
	lamports: number;
	owner: PublicKey;
	rentEpoch: number;
	space: number;
};

export type Reward = {
	mint: string;
	amount: string;
};

export type MultiLevel = {
	claimed: string;
	frozen: string;
};

export type Owner = {
	owner: PublicKey;
	share: number;
	withMultiLevel: MultiLevel;
	noMultiLevel: MultiLevel;
};

export type MemberData = {
	bump: number;
	referrer: PublicKey;
	owner: PublicKey;
	referrerTreasuryOwnerHash: number[];
	name: string;
	organization: string;
	created: number;
	rewardsReceived: Reward[];
	numberRewardsTracked: number;
	accountVersion: string;
};

export type ProfileData = {
	authority: PublicKey;
	bump: number;
	buddyType: string;
	dateCreated: number;
	isfrozen: boolean;
	referrerTreasuryPda: PublicKey;
	referrerType: string;
	name: string;
};

export type ReferralData = {
	bump: number;
	referrer: PublicKey;
	owner: PublicKey;
	referrerTreasuryOwnerHash: number[];
	name: string;
	organization: string;
	created: number;
	rewardsReceived: Reward[];
	numberRewardsTracked: number;
	accountVersion: string;
};

export type TreasuryData = {
	bump: number;
	amountNoMultiLevel: string;
	totalBps: number;
	mint: string;
	owners: Owner[];
};

export interface OrganizationData {
	authority: string;
	bump: number;
	dateCreated: number;
	name: string;
	mainTokenMint: string;
	enforceWalletUniqueness: boolean;
	ambassador: string;
	ambassadorShareKeptInBps: number;
	accountVersion: number;
	allowMultiAttribution: boolean;
	volumeRequiredForRewards: string;
}

export type MemberAccountInfo = {
	account: Account;
	pubkey: PublicKey;
	parsedData: MemberData;
};

export type ProfileAccountInfo = {
	account: Account;
	pubkey: PublicKey;
	parsedData: ProfileData;
};

export type referralAccountInfo = {
	account: Account;
	pubkey: PublicKey;
	parsedData: ReferralData;
};

export type TreasuryAccountInfo = {
	account: Account;
	pubkey: PublicKey;
	parsedData: TreasuryData;
};

export type OrganizationAccountInfo = {
	account: Account;
	pubkey: PublicKey;
	parsedData: OrganizationData;
};

export enum RadioSelectorType {
	Organization = "Organization",
	Member = "Member",
	Profile = "Profile/Wallet",
}

export type SerializedData = {
	profile?: ProfileData;
	member?: MemberAccountInfo & MemberData;
	treasury?: TreasuryData;
	treasuryCount?: number;
	publicKey?: string;
	profilePubkey?: string;
};

export type WalletDetails = {
	profiles: ProfileAccountInfo[];
	members: MemberAccountInfo[];
	publicKey: string;
	referrals: referralAccountInfo[];
	treasuries: TreasuryAccountInfo[];
	wallet: PublicKey;
};
