import { OrganizationTableRow } from "../types";
import OrganizationDetailItem from "./OrganizationDetailItem";

const OrganizationDetails = ({
	organizationData,
}: {
	organizationData: OrganizationTableRow[];
}) => (
	<div>
		<h2 className="text-lg md:text-2xl font-bold text-primary">Details</h2>
		<table className="w-full text-xs md:text-base">
			<tbody>
				{organizationData.map(
					(
						item: {
							key: string;
							value: string;
							link?: string | undefined;
						},
						index: number
					) => (
						<OrganizationDetailItem
							key={item.key}
							item={item}
							index={index}
						/>
					)
				)}
			</tbody>
		</table>
	</div>
);

export default OrganizationDetails;
