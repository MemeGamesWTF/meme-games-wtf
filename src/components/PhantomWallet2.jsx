import React, { useState, useEffect } from "react";
import "./PhantomWallet2.css";

export default function PhantomWallet2() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [phantomWalletFound, setPhantomWalletFound] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Helper function to check if on mobile device
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
  };

  // Helper function to check if Phantom is installed as an extension
  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;
      
      if (provider?.isPhantom) {
        return provider;
      }
    }
    return null;
  };

  useEffect(() => {
    // Determine if user is on mobile
    setIsMobile(checkIfMobile());

    // Check if Phantom is available as an extension
    const checkForPhantom = async () => {
      try {
        const provider = getProvider();
        setPhantomWalletFound(!!provider);
        
        if (provider) {
          // Check if already connected
          try {
            const resp = await provider.connect({ onlyIfTrusted: true });
            setWalletAddress(resp.publicKey.toString());
            localStorage.setItem('phantomPublicKey', resp.publicKey.toString());
          } catch (err) {
            // This error is expected if not already connected
            console.log("Not already connected to Phantom");
            
            // Check if user previously connected and wasn't manually disconnected
            const savedPublicKey = localStorage.getItem('phantomPublicKey');
            const hasManuallyDisconnected = localStorage.getItem('wallet_manually_disconnected') === 'true';
            
            if (savedPublicKey && !hasManuallyDisconnected) {
              // We'll attempt reconnection when user clicks connect
              console.log("Previous connection found, waiting for user to initiate reconnection");
            }
          }
        }
      } catch (error) {
        console.error("Error checking for Phantom wallet:", error);
        setPhantomWalletFound(false);
      }
    };
    
    // Check if we're returning from mobile wallet connection
    const checkForMobileRedirect = () => {
      // This is for handling deep link returns if using Phantom's legacy mobile connection
      // This is used as a fallback when SDK connection isn't available on mobile
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      
      if (params.has('phantom_encryption_public_key') && params.has('public_key')) {
        const phantomPublicKey = params.get('public_key');
        setWalletAddress(phantomPublicKey);
        
        // Store the connection in localStorage
        localStorage.setItem('phantomPublicKey', phantomPublicKey);
        localStorage.removeItem('wallet_manually_disconnected');
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };
    
    checkForPhantom();
    checkForMobileRedirect();
  }, []);

  const connectWallet = async () => {
    try {
      const provider = getProvider();
      
      if (!provider) {
        if (isMobile) {
          // On mobile without the extension, use the Phantom mobile app via universal link
          const mobileLinkUrl = `https://phantom.app/ul/browse/${encodeURIComponent(window.location.href)}`;
          window.location.href = mobileLinkUrl;
          return;
        } else {
          // On desktop without the extension, prompt to install
          if (window.confirm("Phantom wallet extension not detected. Would you like to install it?")) {
            goToPhantomInstallPage();
          }
          return;
        }
      }
      
      // Connect to Phantom extension
      const resp = await provider.connect();
      const publicKeyString = resp.publicKey.toString();
      
      // Save public key and connection status
      setWalletAddress(publicKeyString);
      localStorage.setItem('phantomPublicKey', publicKeyString);
      localStorage.removeItem('wallet_manually_disconnected');
      
      return publicKeyString;
    } catch (error) {
      console.error("Connection failed:", error);
      alert(`Failed to connect: ${error.message}`);
    }
  };

  const disconnectWallet = async () => {
    try {
      const provider = getProvider();
      
      if (provider) {
        // Disconnect from Phantom
        await provider.disconnect();
      }
      
      // Clear local storage
      localStorage.removeItem('phantomPublicKey');
      localStorage.setItem('wallet_manually_disconnected', 'true');
      
      // Update state
      setWalletAddress(null);
    } catch (error) {
      console.error("Disconnection failed:", error);
    }
  };

  // Function to open Phantom install page based on device
  const goToPhantomInstallPage = () => {
    // Check if on iOS or Android
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=app.phantom";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/app/phantom-solana-wallet/id1598432977";
    } else {
      window.open("https://phantom.app/download", "_blank");
    }
  };

  // Function to send SOL using SDK
  const sendSol = async (recipient, amount) => {
    try {
      const provider = getProvider();
      
      if (!provider) {
        alert("Phantom wallet is not installed!");
        return;
      }
      
      // Make sure we're connected
      if (!walletAddress) {
        await connectWallet();
      }
      
      // Note: This is a placeholder. In a real implementation, you would use
      // Solana web3.js to create and send the transaction
      console.log(`Would send ${amount} SOL to ${recipient}`);
      
      // Actual implementation would look something like this:
      /*
      import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
      
      const connection = new Connection('https://api.mainnet-beta.solana.com');
      const recipientPubKey = new PublicKey(recipient);
      
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(walletAddress),
          toPubkey: recipientPubKey,
          lamports: amount * LAMPORTS_PER_SOL
        })
      );
      
      // Send transaction
      const { signature } = await provider.signAndSendTransaction(transaction);
      await connection.confirmTransaction(signature);
      */
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <> 
      <div className="mobpw1">
        <div className="mobpw2">
          {!phantomWalletFound && !isMobile ? (
            <div className="mobpw3">
              <button onClick={goToPhantomInstallPage} className="mobpw7">
                Install Phantom Wallet
              </button>
            </div>
          ) : walletAddress ? (
            <div className="mobpw3">
              <button onClick={disconnectWallet} className="mobpw6">
                Disconnect Phantom Wallet
              </button>
              <p className="mobpw5">{walletAddress}</p>
            </div>
          ) : (
            <button onClick={connectWallet} className="mobpw7">
              Connect Phantom Wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
}