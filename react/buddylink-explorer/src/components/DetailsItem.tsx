const DetailsItem = ({
	label,
	value,
	link,
}: {
	label?: string;
	value?: string | number;
	link?: boolean;
}) => (
	<div className="flex flex-col max-w-[100vw] ">
		{label && (
			<span className="px-2 py-[1px] rounded-lg font-medium text-sm 2xl:text-base mb-1">
				{label}
			</span>
		)}
		{link && value ? (
			<a
				className="bg-primary-dark px-3 py-2 rounded-lg flex items-center justify-start gap-2 text-xs  2xl:text-base hover:bg-primary hover:text-primary-dark overflow-auto"
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
			<span className="bg-primary-dark rounded-lg px-3 py-2  text-xs  2xl:text-base">
				{value ?? "-"}
			</span>
		)}
	</div>
);

export default DetailsItem;
