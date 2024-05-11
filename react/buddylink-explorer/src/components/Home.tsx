import { useWallet } from "@solana/wallet-adapter-react";
import ConnectButton from "./ConnectButton";
import Tables from "../ui/Tables";

const Home = () => {
	const wallet = useWallet();
	return (
		<div className="container flex-1">
			{!wallet.connected && <ConnectButton />}
			{wallet.connected && <Tables />}
		</div>
	);
};

export default Home;
