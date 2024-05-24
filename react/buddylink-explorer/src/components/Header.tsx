import { useWallet } from "@solana/wallet-adapter-react";
import { WalletIcon } from "@solana/wallet-adapter-react-ui";

const Header = () => {
	const wallet = useWallet();

	const handleDisconnect = () => {
		wallet.disconnect();
	};

	return (
		<header>
			<div className="container h-20 flex items-center p-5 ">
				<a
				href={"https://buddy.link"}
				target="_blank"
				className="flex gap-2 items-center justify-start"
				>
					<img
						src="logo.png"
						alt="Logo"
						className="w-6 h-6 md:w-5 md:h-5"
					/>
					<h2 className="text-2xl text-primary font-bold">
						Buddy.Link Explorer
					</h2>
				</a>
				<div className="ml-auto flex flex-col md:flex-row items-center gap-2 md:gap-6">
					<div className="flex gap-1 md:gap-2 items-center justify-center ">
						<WalletIcon
							className="w-4 h-4 md:h-6 md:w-6"
							wallet={wallet.wallet}
						/>

						{wallet.publicKey ? 
						(
							<span className="text-xs md:text-base font-bold">{`${wallet.publicKey
								?.toString()
								.slice(0, 4)}...${wallet.publicKey
								?.toString()
								.slice(-4)}`}</span>
						) : (
							<span className="text-xs md:text-base font-bold">Wallet not connected</span>
						)
						}
					</div>
					{wallet.connected && (
						<button
							onClick={handleDisconnect}
							className="bg-primary text-black text-sm font-bold p-2 md:p-3 rounded-lg uppercase"
						>
							Disconnect
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
