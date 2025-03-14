import React, { useState, useEffect } from 'react';
import "./PhantomWallet.css";

export default function PhantomWallet() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.solana && window.solana.isPhantom) {
        try {
          const response = await window.solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());
        } catch (error) {
          console.error('Wallet connection error:', error);
        }
      } else {
        console.log('Phantom Wallet not installed');
      }
    };
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (error) {
        console.error('Wallet connection failed:', error);
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.solana) {
      try {
        await window.solana.disconnect();
        setWalletAddress(null);
        window.localStorage.removeItem('phantom_wallet_session'); // Clear session
      } catch (error) {
        console.error('Wallet disconnection failed:', error);
      }
    }
  };
  

  return (
    <div className="pw1">
      <div className="pw2">
        {walletAddress ? (
          <div className='pw3'>
            {/* <p className="pw4">Connected:</p> */}
            {/* <p className="pw5">{walletAddress}</p> */}
            <button
              onClick={disconnectWallet}
              className="pw6"
            >
              Disconnect Phantom Wallet
            </button>
            {/* <p className="pw4">Connected</p> */}
            <p className="pw5">{walletAddress}</p>           
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="pw7"
          >
            Connect Phantom Wallet
          </button>
        )}
      </div>
    </div>
  );
}
