import { MEMBER_ITEMS_PER_PAGE } from "../lib/constants";
import Loader from "./Loader";

export type MemberTableRow = {
	profile: unknown;
	member: unknown;
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
			<div className="p-4 h-36 flex items-center justify-center">
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
								className={`py-2 px-6 hover:bg-primary hover:text-primary-dark  ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								<a
									href={`https://solscan.io/account/${item.publicKey}`}
									rel="noreferrer"
									target="_blank"
								>
									<div className="flex xl:hidden items-center justify-center gap-2">
										{/*@ts-expect-error types still WIP*/}
										{item.profile.name.length > 12 ? (
											`${
												//@ts-expect-error types still WIP
												item.profile.name.slice(0, 9)
											}...`
										) : (
											<>
												{/*@ts-expect-error types still WIP*/}
												{item.profile.name}
											</>
										)}
										<img
											src="/solscan-logo.png"
											alt="Solscan"
											className="w-4 h-4"
										/>
									</div>
									<div className="hidden xl:flex items-center justify-center gap-2">
										{/*@ts-expect-error types still WIP*/}
										{item.profile.name}
										<img
											src="/solscan-logo.png"
											alt="Solscan"
											className="w-4 h-4"
										/>
									</div>
								</a>
							</td>
							<td
								align="center"
								className={`py-2 px-6 hover:bg-primary hover:text-primary-dark  ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								<a
									href={`https://solscan.io/account/${item.publicKey}`}
									rel="noreferrer"
									target="_blank"
									className="flex items-center justify-center gap-2"
								>
									<div className="flex xl:hidden items-center justify-center gap-2">
										{/*@ts-expect-error types still WIP*/}
										{item.member.name.length > 12 ? (
											`${
												//@ts-expect-error types still WIP
												item.member.name.slice(0, 9)
											}...`
										) : (
											<>
												{/*@ts-expect-error types still WIP*/}
												{item.member.name}
											</>
										)}
										<img
											src="/solscan-logo.png"
											alt="Solscan"
											className="w-4 h-4"
										/>
									</div>
									<div className="hidden xl:flex items-center justify-center gap-2">
										{/*@ts-expect-error types still WIP*/}
										{item.member.name}
										<img
											src="/solscan-logo.png"
											alt="Solscan"
											className="w-4 h-4"
										/>
									</div>
								</a>
							</td>
							<td
								align="center"
								className={`py-2 px-6 rounded-r-md ${
									index % 2 ? "bg-primary-dark" : ""
								}`}
							>
								{item.treasuryCount}
							</td>
						</tr>
					))}
					<tr className="">
						<td className=" w-full " colSpan={5}>
							<div className="flex gap-2 items-center justify-center lg:justify-end w-full pt-4">
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() => onNavigate("prev")}
									disabled={page === 0}
								>
									Prev
								</button>
								<span>/</span>
								<button
									className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
									onClick={() => onNavigate("next")}
									disabled={
										data.length < MEMBER_ITEMS_PER_PAGE
									}
								>
									Next
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MembersTable;
