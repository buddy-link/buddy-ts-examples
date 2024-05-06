import WalletIcon from "@/assets/wallet-icon";
import Checkbox from "./checkbox";
import LinkLogo from "@/assets/link-logo";

export default function Table() {
	const data = [
		{
			type: "Profile account exists",
			exists: true,
			address: "2fw...12fds",
		},
		{
			type: "Member account exists",
			exists: true,
			address: "2fw...12fds",
		},
		{
			type: "SOL Treasury account exists",
			exists: false,
			address: "2fw...12fds",
		},
		{
			type: "USDC Treasury account exists",
			exists: true,
			address: "2fw...12fds",
		},
		{
			type: "Referral code used",
			code: "?????",
		},
	];

	return (
		<div className="flex flex-col gap-y-10 items-center justify-center text-primary-text-dark">
			<h2 className="text-center text-[22px] font-bold  tracking-tight">
				Referral Program Info
			</h2>
			<div className="grid gri-cols-3">
				<table className="w-full table-fixed col-span-3">
					<thead>
						<tr>
							<th align="left" className="px-4 pb-4 w-full">
								Status as a referrer
							</th>
							<th align="left" className="px-4 pb-4 w-full">
								Users you referred
							</th>
							<th align="left" className="px-4 pb-4 w-full">
								Status as a user
							</th>
						</tr>
					</thead>
					<tbody>
						{data.slice(0, -1).map((item, index) => (
							<tr key={item.type}>
								<td
									align="left"
									className="px-4 py-1 w-full text-sm"
								>
									<Checkbox
										item={{
											type: item.type,
											exists: item.exists,
											address: item.address,
											code: item.code,
										}}
									/>
								</td>
								<td
									align="left"
									className="px-4 py-1 w-full text-sm"
								>
									<div className="flex gap-1  w-full">
										<WalletIcon /> <span>2fw...12fds</span>
									</div>
								</td>
								<td
									className="px-4 py-1 w-full text-sm"
									align="left"
								>
									<Checkbox
										item={{
											type: item.type,
											exists: item.exists,
											address: item.address,
											code: item.code,
										}}
									/>
								</td>
							</tr>
						))}
						<tr>
							<td></td>
							<td></td>
							<td className="px-4 py-1 w-full text-sm">
								<div className="gap-2 flex items-center justify-start">
									<LinkLogo />
									<span>Referral code used:</span>
									<span>?????</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<button className="brand-btn cursor-pointer">
				Test Your Setup
			</button>
		</div>
	);
}
