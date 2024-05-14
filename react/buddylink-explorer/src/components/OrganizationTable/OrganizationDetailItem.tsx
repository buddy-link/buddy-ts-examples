const OrganizationDetailItem = ({
	item,
	index,
}: {
	item: {
		key: string;
		value: string;
		link?: string;
	};
	index: number;
}) => (
	<tr>
		<td
			className={`py-2 px-2 md:px-4 rounded-l-md ${
				index % 2 ? "bg-primary-dark" : ""
			}`}
		>
			{item.key}:
		</td>
		<td
			className={`py-2 px-2 md:px-4 rounded-r-md ${
				index % 2 ? "bg-primary-dark" : ""
			} ${item.link ? "hover:bg-primary hover:text-primary-dark" : ""}`}
		>
			{item.link ? (
				<a
					href={item.link}
					target="_blank"
					className="flex gap-2 items-center justify-start"
				>
					{`${item.value.slice(0, 6)}...${item.value.slice(-6)}`}
					<img
						src="/solscan-logo.png"
						alt="Solscan"
						className="w-3 h-3 md:w-4 md:h-4"
					/>
				</a>
			) : (
				item.value
			)}
		</td>
	</tr>
);

export default OrganizationDetailItem;
