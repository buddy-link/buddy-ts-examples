// export type OrganizationTableRow = {
// 	key: string;
// 	value: string;
// 	link?: string;
// };

// interface Props {
// 	data: OrganizationTableRow[];
// }
const WalletTable = () => (
	// { data }: Props

	<div>Wallet table coming soon!</div>
	// <table className="w-full">
	// 	<tbody>
	// 		{data.map((item, index) => {
	// 			return (
	// 				<tr key={item.key}>
	// 					<td
	// 						className={`py-2 px-4 rounded-l-md ${
	// 							index % 2 ? "bg-primary-dark" : ""
	// 						}`}
	// 					>
	// 						{item.key}:
	// 					</td>
	// 					<td
	// 						className={`py-2 px-4 rounded-r-md ${
	// 							index % 2 ? "bg-primary-dark" : ""
	// 						} ${
	// 							item.link
	// 								? "hover:bg-primary hover:text-primary-dark"
	// 								: ""
	// 						}`}
	// 					>
	// 						{item.link ? (
	// 							<a
	// 								href={item.link}
	// 								target="_blank"
	// 								className="flex gap-2 items-center justify-start "
	// 							>
	// 								{`

	//               ${item.value.slice(0, 6)}...${item.value.slice(-6)} `}

	// 								<img
	// 									src="/solscan-logo.png"
	// 									alt="Solscan"
	// 									className="w-4 h-4"
	// 								/>
	// 							</a>
	// 						) : (
	// 							item.value
	// 						)}
	// 					</td>
	// 				</tr>
	// 			);
	// 		})}
	// 	</tbody>
	// </table>
);

export default WalletTable;
