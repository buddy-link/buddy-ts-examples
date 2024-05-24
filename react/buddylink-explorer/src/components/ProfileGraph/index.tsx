import { useCallback, useEffect, useRef, useState } from "react";
import { getMemberAccounts, getOrganizationAccounts } from "buddy.link";
import { useConnection } from "@solana/wallet-adapter-react";
// import { Connection } from "@solana/web3.js";
// import EmptyState from "../EmptyState";
// import useData from "../../ui/Tables/useData";
// import OrganizationDetails from "./OrganizationDetails";
// import MemberSection from "./MemberSection";
import { MemberAccountInfo, OrganizationAccountInfo } from "../../ui/Tables/types.ts";
import useSearch from "../../ui/Tables/useSearch";
import { ForceGraph2D } from 'react-force-graph';

const OrganizationGraph = () => {
	const [orgNameList, setOrgNameList] = useState<string[]>([]);
	const [memberList, setMemberList] = useState<object[]>([]);
	const [memberIndexList, setMemberIndexList] = useState<object[]>([]);
	// const { organization, loading } = useBuddyLink();
	// const [organizationName] = useBuddyState("ORGANIZATION_NAME");
	const { connection } = useConnection();
	const fgRef = useRef();
	
	const { handleChange, values } = useSearch();

	useEffect(() => {
		const fetchMembers = async () => {
			const members = await getMemberAccounts(connection);

			console.log(members);

			const memberArray = members.map((mem: MemberAccountInfo) => {
				const memberName = mem.parsedData.name;
				return memberName;
			});
			setMemberIndexList(memberArray)
			setMemberList(members);
		};

		fetchMembers();
	}, [connection]);

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
	
	//Random Data to test
	// const N = 300;
    // const myData = {
    //   nodes: [...Array(N).keys()].map(i => ({ id: i })),
    //   links: [...Array(N).keys()]
    //     .filter(id => id)
    //     .map(id => ({
    //       source: id,
    //       target: Math.round(Math.random() * (id-1))
    //     }))
    // };

	//Org Data Structuring for Graph
	// const orgData = {
	// 	nodes: orgList(),
	// 	links: []
	// };

	//Org Data Structuring for Graph
	const orgData = {
		nodes: orgNameList.map(i => ({ id: orgNameList.indexOf(i), name: i })),
		links: orgNameList.map(i => ({ source: orgNameList.indexOf(i), target: Math.round(Math.random() * (orgNameList.length-1))}))
	};

	const memberData = {
		// @ts-expect-error missing types
		nodes: memberList.map(i => ({ id: memberIndexList.indexOf(i.parsedData.name), name: i.parsedData.name, group: i.parsedData.organization })),
		// @ts-expect-error missing types
		links: memberList.map(i => ({ source: memberIndexList.indexOf(i.parsedData.name), target: Math.round(Math.random() * (memberList.length-1)) }))
	};

	// const combinedData = {
	// 	nodes: [
	// 		...orgNameList.map(i => ({ id: orgNameList.indexOf(i), name: i, group: orgNameList.indexOf(i) })),
	// 		// @ts-expect-error missing types
	// 		...memberList.map(i => ({ id: 100 + memberIndexList.indexOf(i.parsedData.name), name: i.parsedData.name, group: orgNameList.indexOf(i.parsedData.organization) }))
	// 	],
	// 	links: [
	// 		// ...orgNameList.map(i => ({ source: orgNameList.indexOf(i), target: Math.round(Math.random() * (orgNameList.length-1))})),
	// 		// @ts-expect-error missing types
	// 		...memberList.map(i => ({ source: 100 + memberIndexList.indexOf(i.parsedData.name), target: orgNameList.indexOf(i.parsedData.organization) }))
	// 	]
	// };

	return (
		<div className="h-80">
			<ForceGraph2D
				height={320}
				ref={fgRef}
				graphData={orgData} //myData
				nodeId={'id'}
				nodeLabel={'name'}
				cooldownTicks={100}
				//@ts-expect-error fgRef undefined err
				onEngineStop={() => fgRef && fgRef.current.zoomToFit(300, 15)}
			/>

			{/* <ForceGraph2D
				// height={500}
				ref={fgRef}
				graphData={combinedData}
				nodeId={'id'}
				nodeLabel={'name'}
				nodeAutoColorBy={'group'}
				cooldownTicks={100}
				//@ts-expect-error fgRef undefined err
				onEngineStop={() => fgRef && fgRef.current.zoomToFit(300, 15)}
			/> */}
		</div>
	);

	// if (!organizationName) {
	// 	return (
	// 		<EmptyState
	// 			title="Enter Organization Name"
	// 			description="Start exploring by typing the name of an organization"
	// 			imagePath="/no-search.svg"
	// 		/>
	// 	);
	// }

	// if (loading.isLoadingOrganization && !organization) {
	// 	return (
	// 		<div className="flex items-center justify-center py-12">
	// 			<div className="loader" />
	// 		</div>
	// 	);
	// }

	// if (!loading.isLoadingOrganization && !organization) {
	// 	return (
	// 		<EmptyState
	// 			title="Organization Not Found"
	// 			description="Oops! We couldn't find any information for the entered organization. Please check the name and try again."
	// 			imagePath="/no-result.svg"
	// 		/>
	// 	);
	// }

	// return (
	// 	<div className="grid grid-cols-1 lg:grid-cols-[20fr,1fr,20fr] lg:grid-rows-1 gap-3 items-start justify-center gap-y-10">
	// 		<OrganizationDetails organizationData={organizationData} />
	// 		<Divider />
	// 		<MemberSection
	// 			membersData={membersData}
	// 			isLoading={loading.isLoadingMembers || loadingSerializer}
	// 			membersPage={membersPage}
	// 			handleNavigateMembers={handleNavigateMembers}
	// 		/>
	// 	</div>
	// );
};

// const Divider = () => (
// 	<>
// 		<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
// 		<span className="w-full h-[1px] bg-[#F6F7F7] block lg:hidden my-auto"></span>
// 	</>
// );

export default OrganizationGraph;
