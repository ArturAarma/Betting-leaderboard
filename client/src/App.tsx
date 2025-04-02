import leaderbordLogo from "/leaderboard.png";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchCustomers, fetchLeaderboard } from "./requests";
import type { DatabaseCustomer, DatabaseLeaderboard } from "./types";
import LTable from "../components/LTable";

function App() {

  const [leaderboard, setLeaderboard] = useState<DatabaseLeaderboard[]>([]);

  async function init() {
    const [fetchedLeaderboard] = await Promise.all([
      
      fetchLeaderboard(),
    ]);
    
    setLeaderboard(fetchedLeaderboard);
  }

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    
    console.log("Leaderboard:", leaderboard);
  }, [leaderboard]);

  

  return (
    <>
      <div>
        <img src={leaderbordLogo} className="logo" alt="Leaderboard logo" />
      </div>
      <h1>Betting Leaderboard</h1>
      
      
<div>
  <LTable leaderboard={leaderboard} />
</div>
      

    </>
  );
}

export default App;
