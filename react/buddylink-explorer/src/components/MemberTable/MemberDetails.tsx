import { SerializedData } from "../../ui/Tables/types";
import DetailsItem from "../DetailsItem";
import MemberDetailSection from "./MemberDetailsSection";

const MemberDetails = ({ member }: { member: SerializedData | null }) => {
	if (!member) return null;

	return (
		<div className="flex flex-col px-3 gap-4">
			<MemberDetailSection title="Member">
				<DetailsItem
					label="Name"
					value={member.member?.parsedData.name}
				/>
				<DetailsItem label="PublicKey" value={member.publicKey} link />
				<div className="grid grid-cols-2 gap-4">
					<DetailsItem
						label="Organization"
						value={member.member?.parsedData.organization}
					/>
					<DetailsItem
						label="Treasury Count"
						value={member.treasuryCount}
					/>
				</div>
			</MemberDetailSection>

			<MemberDetailSection title="Profile">
				<DetailsItem label="Name" value={member.profile?.name} />
				<DetailsItem
					label="PublicKey"
					value={member.profilePubkey}
					link
				/>
			</MemberDetailSection>
			<MemberDetailSection title="Wallet" lastSection>
				<DetailsItem
					label=""
					value={member.profile?.authority.toBase58()}
					link
				/>
			</MemberDetailSection>
		</div>
	);
};

export default MemberDetails;
