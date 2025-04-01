import leaderbordLogo from "/leaderboard.png";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchCustomers, fetchLeaderboard } from "./requests";
import type { DatabaseCustomer, DatabaseLeaderboard } from "./types";

function App() {
  const [customers, setCustomers] = useState<DatabaseCustomer[]>([]);
  const [leaderboard, setLeaderboard] = useState<DatabaseLeaderboard[]>([]);

  async function init() {
    const [fetchedCustomers, fetchedLeaderboard] = await Promise.all([
      fetchCustomers(),
      fetchLeaderboard(),
    ]);
    setCustomers(fetchedCustomers);
    setLeaderboard(fetchedLeaderboard);
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    console.log("Customers:", customers);
    console.log("Leaderboard:", leaderboard);
  }, [customers, leaderboard]);

  

  return (
    <>
      <div>
        <img src={leaderbordLogo} className="logo" alt="Leaderboard logo" />
      </div>
      <h1>Betting Leaderboard</h1>
      
      
      
      
<div>
  {leaderboard.length === 0 ? <p>No leaderboard data</p> : leaderboard.map((l, i) => (
    <p key={i}>TOP {i + 1}: Name: {l.first_name} {l.last_name} Country: {l.country} Bets: {l.total_bets} Win Rate: {l.win_percentage}% Profit: {l.profit}€</p>
  ))}
</div>
    </>
  );
}

export default App;
