import React, { Component } from "react";
import styles from "./SoundcloudPlayer.module.scss";
import ReactPlayer from "react-player";

class SoundcloudPlayer extends Component {

  render() {

    return (
      <div className={styles.soundcloudplayer}>
        <p>{this.props.player.title}</p>
        <ReactPlayer height={'150px'} width={'100%'} url={this.props.player.url} />
      </div>
    );
  }
}

export default SoundcloudPlayer;
