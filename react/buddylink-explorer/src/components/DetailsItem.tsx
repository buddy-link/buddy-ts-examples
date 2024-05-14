const DetailsItem = ({
	label,
	value,
	link,
}: {
	label: string;
	value?: string | number;
	link?: boolean;
}) => (
	<div className="flex flex-col">
		<span className="px-2 py-[1px] rounded-lg">{label}:</span>
		{link && value ? (
			<a
				className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-dark"
				href={`https://solscan.io/account/${value}`}
				rel="noreferrer"
				target="_blank"
			>
				{value}
				<img
					src="/solscan-logo.png"
					alt="Solscan"
					className="w-4 h-4"
				/>
			</a>
		) : (
			<span className="bg-primary-dark px-2 py-[1px] rounded-lg">
				{value ?? "-"}
			</span>
		)}
	</div>
);

export default DetailsItem;
