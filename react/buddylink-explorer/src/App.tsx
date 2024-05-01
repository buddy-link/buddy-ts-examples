import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Header from "./components/Header";
import "@solana/wallet-adapter-react-ui/styles.css";
import ConnectButton from "./components/ConnectButton";
import { useInitBuddyLink, useBuddyState } from "buddy.link";
import Organization from "./ui/Organization";

const App = () => {
	const wallet = useWallet();
	const { connection } = useConnection();
	const [organizationName] = useBuddyState("ORGANIZATION_NAME");
	const [client] = useBuddyState("BUDDY_CLIENT");

	// THIS MUST BE FIXED IN SDK
	// returning xyz if organizationName is empty string
	// since passing empty string doesn't reset organization
	useInitBuddyLink(connection, wallet, organizationName || "xyz", {
		debug: false,
	});

	return (
		<main className="min-h-svh flex flex-col">
			<Header />
			<div className="container flex-1">
				{!wallet.connected && <ConnectButton />}
				{wallet.connected && <Organization />}
			</div>
		</main>
	);
};

export default App;
