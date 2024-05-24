import { useEffect, useRef, useState } from "react";
// import { PublicKey } from "@solana/web3.js";
import { getMemberAccounts } from "buddy.link";
import { useConnection } from "@solana/wallet-adapter-react";
import { MemberAccountInfo } from "../../ui/Tables/types.ts";
import useSearch from "../../ui/Tables/useSearch";
import { ForceGraph2D } from 'react-force-graph';

const parseReferralTarget = (memberIndexList:object[], memberList:object[], member:MemberAccountInfo) => {
	// console.log(`parseReferralTarget`, member);

	if(!(member && member?.parsedData?.referrer)) { console.log('A'); return 0; }

	//@ts-expect-error type error
	const lookupReferrer = memberList.filter((n) => {console.log(`n`,n?.parsedData?.owner); console.log(`member`,member?.parsedData?.referrer); n?.parsedData?.owner == member?.parsedData?.referrer });
	if(!(lookupReferrer?.length > 1)) { console.log('B', lookupReferrer); return 0; }

	//@ts-expect-error type error
	const referrerIndex = memberIndexList.indexOf(lookupReferrer[0]?.parsedData?.name)
	if(referrerIndex < 0) { console.log('C'); return 0; }

	return referrerIndex;
}

const OrganizationGraph = () => {
	const [memberList, setMemberList] = useState<object[]>([]);
	const [memberIndexList, setMemberIndexList] = useState<object[]>([]);
	const { connection } = useConnection();
	const fgRef = useRef();
	
	const { values } = useSearch();

	useEffect(() => {
		const fetchMembers = async () => {
			const orgNode = {parsedData: {name: values?.organizationValue || "organizationnotfound"} }
			const members = await getMemberAccounts(connection, {organizationName: values?.organizationValue});

			const memberArray = [
				values?.organizationValue || "organizationnotfound",
				...members.map((mem: MemberAccountInfo) => {
				const memberName = mem.parsedData.name;
				return memberName;
			})];
			setMemberIndexList(memberArray)
			setMemberList([orgNode, ...members]);
		};

		fetchMembers();
	}, [connection, values.organizationValue]);

	//Member Data Structuring for Graph
	//TODO: Need to map referrerTreasury to referrerMember in order to get 
	const memberData = {
		// @ts-expect-error missing types
		nodes: memberList.slice(0,50).map(i => ({ id: memberIndexList.indexOf(i.parsedData.name), name: i.parsedData.name, group: i.parsedData.referrer })),
		// @ts-expect-error missing types
		links: memberList.slice(0,50).map(i => ({ source: memberIndexList.indexOf(i.parsedData.name), target: parseReferralTarget(memberIndexList, memberList, i) }))
	};

	return (
		<div className="h-80">
			<ForceGraph2D
				height={320}
				ref={fgRef}
				graphData={memberData}
				nodeId={'id'}
				nodeLabel={'name'}
				nodeAutoColorBy={'group'}
				cooldownTicks={100}
				//@ts-expect-error fgRef undefined err
				onEngineStop={() => fgRef && fgRef.current.zoomToFit(300, 15)}
			/>
		</div>
	);
};

export default OrganizationGraph;
