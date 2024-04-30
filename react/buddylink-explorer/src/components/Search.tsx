interface Props {
	title: string;
	inputPlaceholder: string;
	inputValue: string;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({
	title,
	inputPlaceholder,
	inputValue,
	onInputChange,
}: Props) => (
	<div className="w-full bg-[#282828] p-4 rounded-md flex flex-col gap-4">
		<h2 className="font-bold">{title}</h2>
		<input
			placeholder={inputPlaceholder}
			value={inputValue}
			className="bg-transparent border border-[#8b8b8b] rounded-lg p-2 outline-none w-full"
			onChange={onInputChange}
		/>
	</div>
);

export default Search;
