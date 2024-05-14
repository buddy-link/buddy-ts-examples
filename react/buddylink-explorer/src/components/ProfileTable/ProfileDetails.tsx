import { WalletDetails } from "../../ui/Tables/types";
import DetailsItem from "../DetailsItem";

const ProfileDetails = ({
	profiler,
	referralsCount,
	uniqueOrganizations,
}: {
	profiler: WalletDetails;
	referralsCount: { [key: string]: number };
	uniqueOrganizations: string[];
}) => (
	<div className="flex flex-col px-3 gap-4 text-xs 2xl:text-base">
		<div className="flex flex-col gap-2">
			<h3 className="font-bold text-sm lg:text-base">Profile</h3>
			<div className="grid grid-cols-2 gap-4">
				<DetailsItem
					label="Name"
					value={profiler.profiles[0].parsedData.name}
				/>
				<DetailsItem
					label="Treasury Count"
					value={profiler.treasuries.length}
				/>
			</div>
			<DetailsItem
				label="Public Key"
				value={profiler.profiles[0].pubkey.toBase58()}
				link
			/>
		</div>
		<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
		<div className="flex flex-col gap-2">
			<h3 className="font-bold text-sm lg:text-base">Wallet</h3>
			<DetailsItem
				label="Wallet"
				value={profiler.wallet.toBase58()}
				link
			/>
		</div>
		<span className="w-[95%] h-[1px] bg-white/70 mx-auto"></span>
		<div className="flex flex-col gap-2">
			<h3 className="font-bold text-sm lg:text-base">Organizations</h3>
			<div className="flex gap-2 items-center justify-start w-full flex-wrap">
				{profiler.members.map((member) => (
					<div
						key={member.pubkey.toBase58()}
						className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start w-fit"
					>
						{member.parsedData.organization}
					</div>
				))}
			</div>
			<span className="w-[95%] h-[1px] bg-white/70 mx-auto my-3"></span>
			<div className="flex flex-col gap-2">
				<h3 className="font-bold text-sm lg:text-base">Referrals</h3>
				<div className="flex gap-2 items-center justify-start w-full flex-wrap">
					{uniqueOrganizations.map((organization) => (
						<div
							key={organization}
							className="bg-primary-dark px-2 py-[1px] rounded-lg flex items-center justify-start w-fit"
						>
							{organization}: {referralsCount[organization]}
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default ProfileDetails;
