import Image from 'next/image';
import { BuddyConnectWalletButton } from './wallet-connect-button';
import LoginDialog from './login-dialog';

const Header = () => {
  return (
    <header className=" w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="w-full flex justify-between items-center  py-3  max-w-screen-xl mx-auto px-5">
        <div className="flex gap-2 items-center justify-center">
          <Image src="/logo.webp" alt="logo" width={40} height={40} />
          <span className="text-2xl text-primary-foreground font-bold">Sponsaru</span>
        </div>
        <LoginDialog />
      </div>
    </header>
  );
};

export default Header;
