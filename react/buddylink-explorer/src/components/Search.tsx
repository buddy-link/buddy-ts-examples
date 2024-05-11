import { RadioSelectorType } from "../ui/Tables/types";

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
	<div className="w-full bg-[#282828] p-3 sm:p-4 rounded-md flex flex-col gap-4">
		<div className="flex flex-col gap-2 items-start justify-center">
			<h2 className="font-bold min-w-[260px] sm:text-lg">{title}</h2>
			{radioValue ? (
				<div>
					{Object.values(RadioSelectorType).map((value) => (
						<button
							key={value}
							className={` font-bold px-2 py-1 lg:py-0 first:rounded-l-lg last:rounded-r-lg uppercase border border-primary text-xs md:text-sm  ${
								radioValue === RadioSelectorType[value]
									? "bg-primary text-black"
									: "bg-primary-dark"
							}`}
							onClick={() =>
								changeRadioStatus?.(RadioSelectorType[value])
							}
						>
							{value}
						</button>
					))}
				</div>
			) : null}
		</div>
		<input
			placeholder={inputPlaceholder}
			value={inputValue}
			className="bg-transparent border border-[#8b8b8b] rounded-lg p-2 outline-none w-full text-sm lg:text-base"
			onChange={onInputChange}
		/>
		<div className="flex gap-x-2 overflow-x-auto">
			{chips.length > 0 &&
				chips.slice(0, 3).map((chip, index) => (
					<button
						key={chip}
						className="bg-primary text-black font-bold  px-2 py-1 lg:py-0 rounded-lg uppercase hover:opacity-70 w-fit text-xs sm:text-sm"
						onClick={() => onChipClick?.(chips[index])}
					>
						{chips[index]}
					</button>
				))}
			{chips.length > 3 ? (
				<button
					className="bg-primary text-black font-bold  px-2 py-1 lg:py-0 rounded-lg uppercase w-fit text-sm"
					disabled
				>
					{`+${chips.length - 3} more`}
				</button>
			) : null}
		</div>
	</div>
);

export default Search;
