/* eslint-disable no-mixed-spaces-and-tabs */
import { MEMBER_ITEMS_PER_PAGE } from "../../lib/constants";
import { SerializedData } from "../../ui/Tables/types";

const MemberTableContent = ({
	pageMembersParsed,
	filteredMemberCount,
	handleNavigateMembers,
	membersPage,
	dataLength,
	setMember,
	member,
}: {
	pageMembersParsed: SerializedData[];
	filteredMemberCount: number;
	handleNavigateMembers: (type: "prev" | "next") => void;
	membersPage: number;
	dataLength: number;
	setMember: (member: SerializedData | null) => void;
	member: SerializedData | null;
}) => (
	<>
		<table className="text-xs  2xl:text-base w-full">
			<thead>
				<tr className="text-sm lg:text-base">
					<th align="left" className="px-5">
						Member
					</th>
					<th align="right" className="px-5">
						Organization
					</th>
					<th align="right" className="px-5">
						Profile
					</th>
					<th align="right" className="px-5">
						Wallet
					</th>
				</tr>
			</thead>
			<tbody>
				{pageMembersParsed.map((item, index) => (
					<tr
						key={item.publicKey}
						className={`py-2 px-5 hover:bg-primary hover:text-primary-dark cursor-pointer ${
							index % 2 ? "bg-primary-dark" : ""
						} ${
							member?.publicKey === item.publicKey
								? "bg-primary/80"
								: ""
						}`}
						onClick={() => setMember(item)}
					>
						<td align="left" className="py-2 px-5">
							<div className="flex items-center justify-start gap-2 whitespace-nowrap">
								{item.member
									? `${item.member.parsedData.name.slice(
											0,
											4
									  )}...${item.member.parsedData.name.slice(
											-4
									  )}`
									: "-"}
							</div>
						</td>
						<td align="right" className="py-2 px-5">
							<div className="flex items-center justify-end gap-2 whitespace-nowrap">
								{item.member
									? `${item.member.parsedData.organization.slice(
											0,
											4
									  )}...${item.member.parsedData.organization.slice(
											-4
									  )}`
									: "-"}
							</div>
						</td>
						<td align="right" className="py-2 px-5">
							<div className="flex items-center justify-end gap-2 whitespace-nowrap">
								{item.profile
									? `${item.profile.name.slice(
											0,
											4
									  )}...${item.profile.name.slice(-4)}`
									: "-"}
							</div>
						</td>
						<td align="right" className="py-2 px-5">
							<div className="flex items-center justify-center gap-2">
								{item.profile
									? `${item.profile.authority
											.toBase58()
											.slice(
												0,
												4
											)}...${item.profile.authority
											.toBase58()
											.slice(-4)}`
									: "-"}
							</div>
						</td>
					</tr>
				))}
				<tr>
					<td colSpan={1} className="w-full">
						<div className="flex gap-2 items-center justify-start w-full pt-4">
							{`Members found: ${filteredMemberCount || 0} of ${dataLength}`}
						</div>
					</td>
					<td colSpan={3} className="w-full">
						<div className="flex gap-2 items-center justify-center lg:justify-end w-full pt-4">
							<button
								className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
								onClick={() => handleNavigateMembers("prev")}
								disabled={membersPage === 0}
							>
								Prev
							</button>
							<span>/</span>
							<button
								className="hover:text-primary disabled:opacity-50 disabled:hover:text-white"
								onClick={() => handleNavigateMembers("next")}
								disabled={dataLength < MEMBER_ITEMS_PER_PAGE}
							>
								Next
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<span className="w-[1px] h-full bg-[#F6F7F7] hidden lg:block mx-auto"></span>
	</>
);

export default MemberTableContent;
