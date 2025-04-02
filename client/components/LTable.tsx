import React from "react";
import "./LTable.css";
import type { DatabaseLeaderboard } from "../src/types";


type Props = {
    
    leaderboard: DatabaseLeaderboard[];
};

const configs = [
    { label: "Name", render: (item: DatabaseLeaderboard) => `${item.first_name} ${item.last_name}` },
    { label: "Country", render: (item: DatabaseLeaderboard) => item.country },
    { label: "Bets", render: (item: DatabaseLeaderboard) => item.total_bets },
    { label: "Win %", render: (item: DatabaseLeaderboard) => item.win_percentage + "%" },
    { label: "Profit", render: (item: DatabaseLeaderboard) => item.profit + "€" },
]

const LTable = ({leaderboard}: Props) => {
    const renderedRows = leaderboard.map((item, index) => {
        return (
            <tr key={item.id}>
                <td className="tdatacell">TOP {index + 1}</td>
                {configs.map((val: any, i: number) => {
                    return <td key={val.label || i} className="tableD">{val.render(item)}</td>
                })}
                
            </tr>
        );
    })
    
    const renderedHeaders = [
        <th key="Rank" className="tHeaderCell">Rank</th>,
      
        ...configs.map((config: any) => {
          return (
            <th className="tHeaderCell" key={config.label}>
              {config.label}
            </th>
          );
        })
      ];
      
      return (
        <div>
          <table>
            <thead>
              <tr>{renderedHeaders}</tr> 
            </thead>
            <tbody>{renderedRows}</tbody>
          </table>
        </div>
      );

};

export default LTable;