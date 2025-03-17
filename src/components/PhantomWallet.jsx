import React, { useState, useEffect } from 'react';
import "./PhantomWallet.css";

export default function PhantomWallet() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      // Check if Phantom is installed
      const isPhantomAvailable = window.solana && window.solana.isPhantom;
      setIsPhantomInstalled(isPhantomAvailable);
      
      if (isPhantomAvailable) {
        try {
          const response = await window.solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());
        } catch (error) {
          // This error is expected if the wallet hasn't been previously connected
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
  
  // Function to open Phantom extension page
  const goToPhantomInstallPage = () => {
    window.open('https://phantom.app/download', '_blank');
  };

  return (
    <div className="pw1">
      <div className="pw2">
        {!isPhantomInstalled ? (
          <div className="pw3">
            {/* <p className="pw4">Phantom Wallet is not installed</p> */}
            <button 
              onClick={goToPhantomInstallPage}
              className="pw7"
            >
              Connect Phantom Wallet
            </button>
          </div>
        ) : walletAddress ? (
          <div className='pw3'>
            <button
              onClick={disconnectWallet}
              className="pw6"
            >
              Disconnect Phantom Wallet
            </button>
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