import leaderbordLogo from "/leaderboard.png";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchLeaderboard } from "./requests";
import type { DatabaseLeaderboard } from "./types";
import LTable from "../components/LTable";

function App() {

  const [leaderboard, setLeaderboard] = useState<DatabaseLeaderboard[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("ALL");
  const uniqueCountries = [...new Set(leaderboard.map(c => c.country))];
  const filteredLeaderboard = leaderboard
    .filter(user => selectedCountry === "ALL" || user.country === selectedCountry)
    .slice(0, 10);

  async function init() {
    const [fetchedLeaderboard] = await Promise.all([
      
      fetchLeaderboard(),
    ]);
    
    setLeaderboard(fetchedLeaderboard);
  }

  useEffect(() => {
    init();
  }, []);

  

  return (
    <>
      <div>
        <img src={leaderbordLogo} className="logo" alt="Leaderboard logo" />
      </div>
      <h1>Betting Leaderboard</h1>
  
      <div className="filter">
        <label className="filterText">Filter by Country:</label>
          <select
          id="countryFilter"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="filterButton"
        >
          <option value="ALL">All</option>
          {uniqueCountries.map(country => (
            <option value={country} key={country}>{country}</option>
          ))}
          </select>
      </div>
          
      <div className="leaderboardTable">
        <LTable leaderboard={filteredLeaderboard} />
      </div>
        

    </>
  );
}

export default App;
