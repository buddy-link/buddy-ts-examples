import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { initBuddyState, initialBuddyLink } from "buddy.link";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./index.css";

initBuddyState({
  ...initialBuddyLink,
  ...{
    ORGANIZATION_NAME: "",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_ENDPOINT}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <App />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  </React.StrictMode>
);
