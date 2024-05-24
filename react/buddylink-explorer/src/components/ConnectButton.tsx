import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const ConnectButton = () => {
  const walletModal = useWalletModal();

  const handleConnect = async () => {
    walletModal.setVisible(true);
  };

  return (
    <div className="h-full flex w-full justify-center">
      <button onClick={handleConnect}>Connect to continue</button>
    </div>
  );
};

export default ConnectButton;
