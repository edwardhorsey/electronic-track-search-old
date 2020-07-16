import React, { Component } from "react";
// import styles from "./Players.module.scss";
import SoundcloudPlayer from "./SoundcloudPlayer";
import { uniqueByUrl } from "../../../data/api-calls"


class PLayers extends Component {

  render() {

    console.log(this.props)
    const players = uniqueByUrl(this.props.playersArray).map(linkObj => <SoundcloudPlayer player={linkObj} />)

    return (
      <>
        {players}
      </>
    );
  }
}

export default PLayers;
