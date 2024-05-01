import { RadioSelectorType } from "../ui/Organization";

interface Props {
	title: string;
	inputPlaceholder: string;
	inputValue: string;
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	radioValue?: string;
	changeRadioStatus?: (value: RadioSelectorType) => void;
	chips?: string[];
	onChipClick?: (chip: string) => void;
}
const Search = ({
	title,
	inputPlaceholder,
	inputValue,
	onInputChange,
	radioValue,
	changeRadioStatus,
	chips = [],
	onChipClick,
}: Props) => (
	<div className="w-full bg-[#282828] p-4 rounded-md flex flex-col gap-4">
		<div className="flex gap-3">
			<h2 className="font-bold">{title}</h2>
			{radioValue ? (
				<div>
					<button
						className={` text-black font-bold px-2 rounded-l-lg uppercase border border-primary  ${
							radioValue === RadioSelectorType.Organization
								? "bg-primary"
								: "bg-primary-dark text-gray-700"
						}`}
						onClick={() =>
							changeRadioStatus?.(RadioSelectorType.Organization)
						}
					>
						Organizations
					</button>
					<button
						className={` text-black font-bold px-2 rounded-r-lg uppercase border border-primary  ${
							radioValue === RadioSelectorType.Member
								? "bg-primary"
								: "bg-primary-dark text-gray-700"
						}`}
						onClick={() =>
							changeRadioStatus?.(RadioSelectorType.Member)
						}
					>
						Members
					</button>
				</div>
			) : null}
		</div>
		<input
			placeholder={inputPlaceholder}
			value={inputValue}
			className="bg-transparent border border-[#8b8b8b] rounded-lg p-2 outline-none w-full"
			onChange={onInputChange}
		/>
		<div className="flex gap-x-2 overflow-x-auto">
			{chips.length > 0 &&
				chips.map((_, index) => (
					<button
						className="bg-primary text-black font-bold px-2 rounded-lg uppercase w-full hover:opacity-70"
						onClick={() => onChipClick?.(chips[index])}
					>
						{chips[index]}
					</button>
				))}
		</div>
	</div>
);

export default Search;
