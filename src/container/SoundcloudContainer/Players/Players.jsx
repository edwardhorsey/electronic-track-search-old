import React, { Component } from "react";
import SoundcloudPlayer from "./SoundcloudPlayer";


class PLayers extends Component {

  render() {
    const players = this.props.data.map((linkObj, index) => <SoundcloudPlayer key={index} player={linkObj} />)
    return (
      <>
        {players}
      </>
    );
  }
}

export default PLayers;
