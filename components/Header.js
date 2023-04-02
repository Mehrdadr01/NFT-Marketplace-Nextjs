import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="p-5 border-b-2  dark:bg-slate-800 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl dark:text-orange-800 ">
                NFT Marketplace
            </h1>
            <div className="flex flex-row items-center">
                <Link href="/" className="mr-4 p-6 dark:text-orange-800">
                    Home
                </Link>
                <Link
                    href="/sell-nft"
                    className="mr-4 p-6 dark:text-orange-800"
                >
                    Sell NFT{" "}
                </Link>

                <ConnectButton moralisAuth={false}></ConnectButton>
            </div>
        </nav>
    )
}
