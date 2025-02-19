import React, { useState, useEffect } from "react";
import "./TransactionList.css";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestTransactions = async () => {
      const solanaRpcUrl =
        "https://api.geckoterminal.com/api/v2/networks/solana/pools/7bNW3AZzo8Jc8gFs2Q2a5gEbji8SoDD8YKbvURJfy6M8/trades?token=AgDNMAi8r2QS1FQEeTHLsZSmkQKCK7xXP2bR7jQ2pump";

      try {
        const response = await fetch(solanaRpcUrl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);

        const data = await response.json();
        setTransactions(data.data || []);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Failed to fetch transactions");
      }
    };

    fetchLatestTransactions();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="transactions-section">
  {transactions.length > 0 ? (
    <div className="transactions-wrapper">
      {[...transactions, ...transactions].map((tx, index) => (
        <div key={index} className="transaction-item">
          + {Number(tx.attributes.to_token_amount).toLocaleString()} WTF
        </div>
      ))}
    </div>
  ) : (
    <p>No transactions available</p>
  )}
</div>

  );
};

export default TransactionList;
