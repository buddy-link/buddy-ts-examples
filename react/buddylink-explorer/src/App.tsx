import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@solana/wallet-adapter-react-ui/styles.css";
import ConnectButton from "./components/ConnectButton";
import { useInitBuddyLink, useBuddyState } from "buddy.link";
import Tables from "./ui/Tables";

const App = () => {
	const wallet = useWallet();
	const { connection } = useConnection();
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");

	// THIS MUST BE FIXED IN SDK
	// returning xyz if organizationName is empty string
	// since passing empty string doesn't reset organization
	useInitBuddyLink(connection, wallet, organizationName || "xyz", {
		debug: false,
	});

	return (
		<main className="min-h-svh flex flex-col mb-2 min-w-[360px] overflow-x-auto">
			<Header />
			<div className="container flex-1">
				{!wallet.connected && <ConnectButton />}
				{wallet.connected && <Tables />}
			</div>
			<Footer />
		</main>
	);
};

export default App;
