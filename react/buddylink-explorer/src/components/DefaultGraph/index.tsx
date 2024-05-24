import { useEffect, useRef, useState } from "react";
import { getOrganizationAccounts } from "buddy.link";
import { useConnection } from "@solana/wallet-adapter-react";
import { OrganizationAccountInfo } from "../../ui/Tables/types.ts";
import { ForceGraph2D } from 'react-force-graph';

const DefaultGraph = () => {
	const [orgNameList, setOrgNameList] = useState<string[]>([]);
	const { connection } = useConnection();
	const fgRef = useRef();

	useEffect(() => {
		const fetchOrgsName = async () => {
			const orgs = await getOrganizationAccounts(connection);

			const orgNamesArray = [
				"buddylink",
				...orgs.map((org: OrganizationAccountInfo) => {
					const orgName = org.parsedData.name;
					return orgName;
				})
			];
			setOrgNameList(orgNamesArray);
		};

		fetchOrgsName();
	}, [connection]);

	//Org Data Structuring for Graph
	const orgData = {
		nodes: orgNameList.map(i => ({ id: orgNameList.indexOf(i), name: i })),
		links: orgNameList.map(i => ({ source: orgNameList.indexOf(i), target: orgNameList.indexOf('buddylink')}))
	};

	return (
		<div className="h-80">
			<ForceGraph2D
				height={320}
				ref={fgRef}
				graphData={orgData}
				nodeId={'id'}
				nodeLabel={'name'}
				nodeAutoColorBy={'id'}
				cooldownTicks={100}
				//@ts-expect-error fgRef undefined err
				onEngineStop={() => fgRef && fgRef.current.zoomToFit(300, 15)}
			/>
		</div>
	);
};

export default DefaultGraph;
