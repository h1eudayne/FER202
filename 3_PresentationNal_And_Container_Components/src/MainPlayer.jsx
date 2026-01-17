import React, { Component } from "react";
import Players from "./Players";
import PlayerPresentation from "./PlayerPresentation";
import { PlayersData } from "../Share/ListOfPlayers";

export class MainPlayer extends Component {
  constructor() {
    super();
    this.state = {
      players: PlayersData,
    };
  }
  render() {
    return <PlayerPresentation players={this.state.players} />;
  }
}

export default MainPlayer;
