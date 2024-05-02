import { MEMBER_ITEMS_PER_PAGE } from "../lib/constants";
import Loader from "./Loader";

export type MemberTableRow = {
	profile: string;
	member: string;
	treasuryCount: number;
	publicKey: string;
};

interface Props {
	data: MemberTableRow[];
	isLoading: boolean;
	page: number;
	onNavigate: (type: "prev" | "next") => void;
}

const MembersTable = ({ data, isLoading, page, onNavigate }: Props) => {
	if (isLoading) {
		return (
			<div className="p-4">
				<Loader />
			</div>
		);
	}
	return (
		<div className="flex flex-col gap-4 pb-3">
			<table className="w-full ">
				<thead>
					<tr className="text-xs md:text-base">
						<th align="center" className="px-2">
							#
						</th>
						<th className="px-2">Profile</th>
						<th className="px-2">Member</th>
						<th className="px-2 ">Treasury count</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={item.publicKey}>
							<td align="center">
								#{page * MEMBER_ITEMS_PER_PAGE + index + 1}
							</td>
							<td
								align="center"
								className={`py-2 px-2 md:px-4 rounded-l-md ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								{item.profile}
							</td>
							<td
								align="center"
								className={`py-2 px-2 md:px-4 hover:bg-primary hover:text-primary-dark  ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								<a
									href={`https://solscan.io/account/${item.publicKey}`}
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center gap-2"
								>
									{item.member}
									<img
										src="/solscan-logo.png"
										alt="Solscan"
										className="w-4 h-4"
									/>
								</a>
							</td>
							<td
								align="center"
								className={`py-2 px-2 md:px-4 rounded-r-md ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								{item.treasuryCount}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className=" flex gap-2 justify-center lg:justify-end">
				<button
					className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
					onClick={() => onNavigate("prev")}
					disabled={page === 0}
				>
					Prev
				</button>
				<span>/</span>
				<button
					className="hover:text-primary"
					onClick={() => onNavigate("next")}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default MembersTable;
