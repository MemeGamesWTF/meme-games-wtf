import React, { useState, useEffect } from 'react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import "./PhantomWallet2.css";

export default function PhantomWallet3() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const [phantomWallet, setPhantomWallet] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Initialize Phantom wallet adapter
    const adapter = new PhantomWalletAdapter();
    setPhantomWallet(adapter);

    // Check if Phantom wallet is already connected
    const checkConnection = async () => {
      try {
        if (adapter.publicKey) {
          setPublicKey(adapter.publicKey);
          setWalletConnected(true);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
        setErrorMessage(error.message || 'Failed to check wallet connection');
      }
    };

    checkConnection();

    // Cleanup listeners
    return () => {
      adapter.disconnect();
    };
  }, []);

  const connectWallet = async () => {
    // Reset previous error
    setErrorMessage(null);

    if (!phantomWallet) {
      setErrorMessage('Phantom wallet adapter not initialized');
      return;
    }

    try {
      // If already connected, just return
      if (phantomWallet.connected) {
        return;
      }

      // Connect to the wallet
      await phantomWallet.connect();

      // Verify connection and set state
      if (phantomWallet.connected && phantomWallet.publicKey) {
        setPublicKey(phantomWallet.publicKey);
        setWalletConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect Phantom Wallet:', error);
      setErrorMessage(error.message || 'Failed to connect Phantom Wallet');
      setWalletConnected(false);
    }
  };

  const disconnectWallet = async () => {
    // Reset previous error
    setErrorMessage(null);

    if (!phantomWallet) {
      setErrorMessage('Phantom wallet adapter not initialized');
      return;
    }

    try {
      await phantomWallet.disconnect();
      setWalletConnected(false);
      setPublicKey(null);
    } catch (error) {
      console.error('Failed to disconnect Phantom Wallet:', error);
      setErrorMessage(error.message || 'Failed to disconnect Phantom Wallet');
    }
  };

  return (
    <div className="">
      {/* Display error message if exists */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      
      {!walletConnected ? (
        <button 
          onClick={connectWallet}
          className="mobpw7"
        >
          Connect Phantom Wallet
        </button>
      ) : (
        <div className="">
          {/* <p className="mb-2">
            <strong>Wallet Connected</strong>
          </p> */}
          {publicKey && (
            <p className="bg-white px-2 py-1 rounded-[5px]">
              {/* <strong>Public Key:</strong>  */}
              <span className="text-[12px] text-black">
                {publicKey.toBase58()}
              </span>
            </p>
          )}
          <button 
            onClick={disconnectWallet}
            className="mobpw6"
          >
            Disconnect Phantom Wallet
          </button>
        </div>
      )}
    </div>
  );
}