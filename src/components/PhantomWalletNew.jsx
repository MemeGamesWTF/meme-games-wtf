import React, { useState, useEffect } from "react";
import "./PhantomWalletNew.css";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

export default function PhantomWalletNew({ onWalletStatusChange }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isPhantomInstalled, setIsPhantomInstalled] = useState(false);
  const [wtfBalance, setWtfBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Notify parent component when wallet status changes
  useEffect(() => {
    if (onWalletStatusChange) {
      onWalletStatusChange(walletAddress !== null);
    }
  }, [walletAddress, onWalletStatusChange]);

  // WTF token mint address
  const WTF_TOKEN_MINT = "AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump";

  // List of Solana RPC endpoints to try
  const RPC_ENDPOINTS = [
    // "https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ",
    "https://quick-intensive-research.solana-mainnet.quiknode.pro/8f2438f3d4dbe5a42bec7211271fd74321f310d8/",
    // "https://solana-api.projectserum.com",
    // "https://rpc.ankr.com/solana",
    // "https://api.mainnet-beta.solana.com"
  ];

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      // Check if Phantom is installed
      const isPhantomAvailable = window.solana && window.solana.isPhantom;
      setIsPhantomInstalled(isPhantomAvailable);

      // Check if user has manually disconnected before
      const hasManuallyDisconnected =
        localStorage.getItem("wallet_manually_disconnected") === "true";

      if (isPhantomAvailable && !hasManuallyDisconnected) {
        try {
          const response = await window.solana.connect({ onlyIfTrusted: true });
          const publicKey = response.publicKey.toString();
          setWalletAddress(publicKey);

          // Fetch WTF balance when wallet is connected
          fetchWtfBalance(publicKey);
        } catch (error) {
          // This error is expected if the wallet hasn't been previously connected
          console.error("Wallet connection error:", error);
        }
      } else {
        console.log("Phantom Wallet not installed or previously disconnected");
      }
    };

    checkIfWalletIsConnected();
  }, []);

  // Try to connect to each RPC endpoint until one works
  const tryRpcEndpoints = async (callback) => {
    for (const endpoint of RPC_ENDPOINTS) {
      try {
        const connection = new Connection(endpoint, "confirmed");
        // Test the connection with a simple request
        await connection.getVersion();
        // If it works, use this connection for the callback
        return await callback(connection);
      } catch (error) {
        console.warn(`RPC endpoint ${endpoint} failed:`, error);
        // Continue to the next endpoint
      }
    }

    // If all endpoints fail, throw an error
    throw new Error("All RPC endpoints failed");
  };

  // Function to fetch WTF token balance
  const fetchWtfBalance = async (publicKey) => {
    if (!publicKey) return;

    setIsLoading(true);
    try {
      await tryRpcEndpoints(async (connection) => {
        const ownerPublicKey = new PublicKey(publicKey);
        const mintPublicKey = new PublicKey(WTF_TOKEN_MINT);

        // Get all token accounts owned by this wallet
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          ownerPublicKey,
          { mint: mintPublicKey }
        );

        // Find the token account with our WTF token
        if (tokenAccounts.value.length > 0) {
          const tokenAccount = tokenAccounts.value[0];
          const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;
          const amount = tokenAmount.amount;
          const decimals = tokenAmount.decimals;

          // Calculate balance with proper decimal places
          const balance = parseInt(amount) / Math.pow(10, decimals);
          setWtfBalance(balance);
        } else {
          // No token accounts found, meaning user has 0 tokens
          setWtfBalance(0);
        }
      });
    } catch (error) {
      console.error("Error fetching WTF balance:", error);
      // Fallback to our sample data for demo purposes
      setWtfBalance(0);
    } finally {
      setIsLoading(false);
    }
  };

  const connectWallet = async () => {
    if (window.solana) {
      try {
        // Remove the disconnected flag when user explicitly connects
        localStorage.removeItem("wallet_manually_disconnected");

        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();
        setWalletAddress(publicKey);

        // Fetch WTF balance when wallet is connected
        fetchWtfBalance(publicKey);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    }
  };

  const disconnectWallet = async () => {
    if (window.solana) {
      try {
        await window.solana.disconnect();
        setWalletAddress(null);
        setWtfBalance(null);

        // Set a flag in localStorage to remember that user manually disconnected
        localStorage.setItem("wallet_manually_disconnected", "true");

        // Additional cleanup
        if (window.solana.isPhantom) {
          window.solana.autoConnect = false;
        }
      } catch (error) {
        console.error("Wallet disconnection failed:", error);
      }
    }
  };

  // Function to open Phantom extension page
  const goToPhantomInstallPage = () => {
    window.open("https://phantom.app/download", "_blank");
  };

  // Function to format the wallet address for display
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4
    )}`;
  };

  // Format balance with commas and fixed decimal places
  const formatBalance = (balance) => {
    if (balance === null) return "-";
    return Number(balance).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <div className="pwn1">
        <div className="pwn2">
          {!isPhantomInstalled ? (
            <div className="pwn3">
              <button onClick={goToPhantomInstallPage} className="pwn7">
                Connect Phantom Wallet
              </button>
            </div>
          ) : walletAddress ? (
            <div className="pwn3">
              <button onClick={disconnectWallet} className="pwn6">
                Disconnect Phantom Wallet
              </button>
              {/* <div className="pwn4N pw-token-info">
                <div className="pw-token-balance">
                  {isLoading ? (
                    <span className="pw-loading text-[#45c124] text-[17px]">
                      Loading...
                    </span>
                  ) : (
                    <span className="pw-balance text-[#45c124] text-[17px]">
                      {formatBalance(wtfBalance)} WTF
                    </span>
                  )}
                </div>
              </div> */}
            </div>
          ) : (
            <button onClick={connectWallet} className="pwn7">
              Connect Phantom Wallet
            </button>
          )}
        </div>
      </div>
    </>
  );
}
