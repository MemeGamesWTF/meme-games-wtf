import React, { useState, useEffect } from 'react';

export default function PhantomWallet3() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
    // Check if Phantom wallet is available
    if (window.solana && window.solana.isPhantom) {
      window.solana.on('connect', (publicKey) => {
        setPublicKey(publicKey.toBase58());
        setWalletConnected(true);
      });

      window.solana.on('disconnect', () => {
        setPublicKey(null);
        setWalletConnected(false);
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Check if Phantom wallet is available
      if (window.solana && window.solana.isPhantom) {
        // Request connection
        const response = await window.solana.connect();
        
        // The 'connect' event listener will handle setting the state
        console.log('Connected with Public Key:', response.publicKey.toBase58());
      } else {
        // Redirect to Phantom wallet installation
        window.open('https://phantom.app', '_blank');
      }
    } catch (error) {
      console.error('Failed to connect Phantom Wallet:', error);
      setWalletConnected(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        await window.solana.disconnect();
        // The 'disconnect' event listener will handle setting the state
      }
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Phantom Wallet Connection</h2>
      
      {!walletConnected ? (
        <button 
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Connect Phantom Wallet
        </button>
      ) : (
        <div className="bg-green-600 p-4 rounded">
          <p className="mb-2">
            <strong>Wallet Connected</strong>
          </p>
          <p className="mb-2 break-words">
            <strong>Public Key:</strong> 
            <span className="ml-2">{publicKey}</span>
          </p>
          <button 
            onClick={disconnectWallet}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}