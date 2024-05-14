const MemberDetailSection = ({
	title,
	children,
	lastSection = false,
}: {
	title: string;
	children: React.ReactNode;
	lastSection?: boolean;
}) => (
	<div className="flex flex-col gap-2">
		<h3 className="font-bold text-sm lg:text-base">{title}</h3>
		{children}
		{!lastSection && (
			<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
		)}
	</div>
);

export default MemberDetailSection;
