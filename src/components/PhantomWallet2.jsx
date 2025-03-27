import { ConnectButton } from 'thirdweb/react';
// import { solana } from "thirdweb/chains";
import { createWallet } from "thirdweb/wallets";
import { lightTheme } from 'thirdweb/react';
import { client } from './Client';
import "./PhantomWallet2.css";

const wallets = [
  createWallet("app.phantom"), // Add your wallet in wallet list
  // add other wallets...
];

function PhantomWallet2() {
  return (
    <div className='absolute bottom-36 left-1/3 transform -translate-x-1/4 px-5 py-2'>
      {/* <h1>My Web3 App</h1> */}
      <ConnectButton
        client={client}
        theme={lightTheme({
          colors: {
            modalBg: "white",
            primaryButtonBg: "#9584e2",
            primaryButtonText: "black",
            connectedButtonBg: "#9584e2",
            borderColor: "#9584e2",
          },
        })}
        connectButton={{
          label: "Connect Phantom Wallet",
        }}
        // testnet={true}
        // chain={solana}
        wallets={wallets}
        appMetadata={{
          name: 'My Web3 App',
          url: 'http://localhost:5173/', // Your app's URL
        }}
      />
    </div>
  );
}

export default PhantomWallet2;