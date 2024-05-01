export type OrganizationTableRow = {
	key: string;
	value: string;
	link?: string;
};

export interface OrganizationTableProps {
	data: OrganizationTableRow[];
}
