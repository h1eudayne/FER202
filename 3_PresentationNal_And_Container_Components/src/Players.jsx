import React from "react";
import { PlayersData } from "../Share/ListOfPlayers";

const Players = () => {
  return (
    <div className="container">
      <div className="column">
        {PlayersData.map((player) => (
          <div className="card">
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button>Detail</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
