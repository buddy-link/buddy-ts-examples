/* eslint-disable no-mixed-spaces-and-tabs */
import { useConnection } from "@solana/wallet-adapter-react";
import {
	getMemberAccounts,
	unwrapProfileAccountData,
	unwrapTreasuryAccountData,
	useBuddyState,
} from "buddy.link";
import { useCallback, useEffect, useState } from "react";
import {
	MemberAccountInfo,
	Owner,
	SerializedData,
	TreasuryData,
} from "../../ui/Tables/types";
import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import Loader from "../Loader";
import MemberTableContent from "./MemberTableContent";
import MemberDetails from "./MemberDetails";

const MemberTable = () => {
	const { connection } = useConnection();
	const [data, setData] = useState<MemberAccountInfo[]>([]);
	const [member, setMember] = useState<SerializedData | null>(null);
	const [loadingSerializer, setLoadingSerializer] = useState(true);
	const [memberName] = useBuddyState("MEMBER_NAME");

	const [membersPage, setMembersPage] = useState(0);
	const [pageMembersParsed, setPageMembersParsed] = useState<
		SerializedData[]
	>([]);

	useEffect(() => {
		const fetchMemberAccounts = async () => {
			const accounts = await getMemberAccounts(connection);
			setData(accounts as MemberAccountInfo[]);
		};

		fetchMemberAccounts();
	}, [connection]);

	const handleNavigateMembers = useCallback((type: "prev" | "next") => {
		setMembersPage((prevPage) =>
			type === "prev" ? Math.max(prevPage - 1, 0) : prevPage + 1
		);
	}, []);

	const serializeMember = useCallback(
		(
			profile: ReturnType<typeof unwrapProfileAccountData>,
			member: MemberAccountInfo,
			treasury: TreasuryData,
			profilePubkey: string
		) => {
			return {
				profile,
				member,
				treasuryCount: treasury.owners.filter(
					(owner: Owner) => owner?.share > 0
				).length,
				publicKey: member?.pubkey.toBase58(),
				profilePubkey,
			};
		},
		[]
	);

	useEffect(() => {
		const startIndex = membersPage * MEMBER_ITEMS_PER_PAGE;
		const searchRegex = new RegExp(`.*${memberName}.*`, "i");

		const filteredMembers = data.filter((item) => {
			const nameMatch = searchRegex.test(item?.parsedData?.name || "");
			const publicKeyMatch = searchRegex.test(
				item?.pubkey?.toBase58() || ""
			);
			return nameMatch || publicKeyMatch;
		});

		const pageMembers = filteredMembers.slice(
			startIndex,
			startIndex + MEMBER_ITEMS_PER_PAGE
		);

		const getTreasury = async () => {
			setLoadingSerializer(true);
			try {
				const memberDataPromises = pageMembers.map(async (member) => {
					const ownerAccountInfo = await connection.getAccountInfo(
						member?.parsedData?.owner
					);
					if (!ownerAccountInfo) throw new Error("Owner not found");

					const ownerTreasury = unwrapTreasuryAccountData(
						ownerAccountInfo.data
					);
					const profileAccountInfo = await connection.getAccountInfo(
						ownerTreasury.owners[0].owner
					);
					if (!profileAccountInfo)
						throw new Error("Profile data not found");

					const profile = unwrapProfileAccountData(
						profileAccountInfo.data
					);

					return serializeMember(
						profile,
						member,
						ownerTreasury,
						ownerTreasury.owners[0].owner.toBase58()
					);
				});

				const response = await Promise.all(memberDataPromises);
				setPageMembersParsed(response as SerializedData[]);
			} catch (error) {
				console.error("Error fetching treasury data:", error);
			} finally {
				setLoadingSerializer(false);
			}
		};

		getTreasury();
	}, [connection, data, membersPage, memberName, serializeMember]);

	if (loadingSerializer || !data.length) {
		return (
			<div className="p-4 h-36 flex items-center justify-center">
				<Loader />
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-[20fr,1fr,15fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10 ">
			<div className="max-w-[100vw] overflow-auto pb-4 flex  items-center justify-start w-full">
				<MemberTableContent
					pageMembersParsed={pageMembersParsed}
					handleNavigateMembers={handleNavigateMembers}
					membersPage={membersPage}
					dataLength={data.length}
					setMember={setMember}
					member={member}
				/>
			</div>
			<Divider />
			<MemberDetails member={member} />
		</div>
	);
};

export default MemberTable;
const Divider = () => (
	<>
		<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
		<span className="w-full h-[1px] bg-[#F6F7F7] block lg:hidden my-auto"></span>
	</>
);
