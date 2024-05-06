import LogoName from "@/assets/logo-name";
import WalletIcon from "@/assets/wallet-icon";
import Table from "@/components/table";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start gap-y-10 mt-16">
			<div className="flex flex-col gap-3 items-center justify-center">
				<Image src={"/logo.webp"} alt="logo" width={60} height={60} />
				<LogoName />
			</div>

			<div className="bg-white rounded-2xl p-16 flex flex-col w-full max-w-5xl">
				<Table />
			</div>
		</main>
	);
}
