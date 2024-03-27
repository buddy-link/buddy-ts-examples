import { useWallet } from "@solana/wallet-adapter-react";

const Header = () => {
  const wallet = useWallet();

  const handleDisconnect = () => {
    wallet.disconnect();
  };

  return (
    <header>
      <div className="container h-20 flex items-center">
        <h2 className="text-2xl text-primary font-bold">Organization Audit</h2>
        <div className="ml-auto flex items-center gap-6">
          <span className="text-xs">{wallet.publicKey?.toString()}</span>
          {wallet.connected && (
            <button
              onClick={handleDisconnect}
              className="bg-primary text-black font-bold p-3 rounded-lg uppercase"
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
