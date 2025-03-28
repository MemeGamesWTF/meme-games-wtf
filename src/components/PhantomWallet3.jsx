import React, { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export default function PhantomWallet3() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState(null);
  const [balance, setBalance] = useState(null);
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

        // Create a connection to the Solana network
        // Use multiple RPC endpoints as fallback
        const rpcEndpoints = [
          'https://api.mainnet-beta.solana.com',
          'https://solana-mainnet.g.alchemy.com/v2/26bxg5odFXZfOMABh0BZ9nNO3w4R4al2', // Replace with your Alchemy key
          'https://rpc.ankr.com/solana'
        ];

        let walletBalance = null;
        for (const endpoint of rpcEndpoints) {
          try {
            const connection = new Connection(endpoint, 'confirmed');
            walletBalance = await connection.getBalance(phantomWallet.publicKey);
            
            // If successful, break the loop
            break;
          } catch (rpcError) {
            console.error(`Failed to get balance from ${endpoint}:`, rpcError);
            // Continue to next endpoint
            continue;
          }
        }

        if (walletBalance !== null) {
          setBalance(walletBalance / 1_000_000_000); // Convert lamports to SOL
        } else {
          setErrorMessage('Failed to fetch wallet balance from all endpoints');
        }
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
      setBalance(null);
    } catch (error) {
      console.error('Failed to disconnect Phantom Wallet:', error);
      setErrorMessage(error.message || 'Failed to disconnect Phantom Wallet');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Phantom Wallet
        </button>
      ) : (
        <div className="bg-green-600 p-4 rounded">
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
              {balance !== null ? (
                <p>
                  <strong>Balance:</strong> 
                  <span className="ml-2">{balance.toFixed(4)} SOL</span>
                </p>
              ) : (
                <p className="text-yellow-200">Unable to fetch balance</p>
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