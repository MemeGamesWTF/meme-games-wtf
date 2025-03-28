import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export default function PhantomWallet3() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    try {
      // Create a new Phantom wallet adapter
      const phantomWallet = new PhantomWalletAdapter();

      // Connect to the wallet
      await phantomWallet.connect();

      // Check if wallet is connected
      if (phantomWallet.connected) {
        const walletPublicKey = phantomWallet.publicKey;
        setPublicKey(walletPublicKey);
        setWalletConnected(true);

        // Create a connection to the Solana network
        const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

        // Get wallet balance
        if (walletPublicKey) {
          const walletBalance = await connection.getBalance(walletPublicKey);
          setBalance(walletBalance / 1_000_000_000); // Convert lamports to SOL
        }
      }
    } catch (error) {
      console.error('Failed to connect Phantom Wallet:', error);
      setWalletConnected(false);
    }
  };

  const disconnectWallet = async () => {
    setWalletConnected(false);
    setPublicKey(null);
    setBalance(null);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* <h2 className="text-2xl font-bold mb-4">Phantom Wallet Connection</h2> */}
      
      {!walletConnected ? (
        <button 
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Phantom Wallet
        </button>
      ) : (
        <div className="bg-green-100 p-4 rounded">
          <p className="mb-2">
            <strong>Wallet Connected</strong>
          </p>
          {publicKey && (
            <div>
              <p className="mb-2">
                <strong>Public Key:</strong> 
                <span className="ml-2 break-words">
                  {publicKey.toBase58()}
                </span>
              </p>
              {balance !== null && (
                <p>
                  <strong>Balance:</strong> 
                  <span className="ml-2">{balance.toFixed(4)} SOL</span>
                </p>
              )}
            </div>
          )}
          <button 
            onClick={disconnectWallet}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}