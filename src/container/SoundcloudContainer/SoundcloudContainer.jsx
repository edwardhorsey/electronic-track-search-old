import React, { Component } from "react";
import styles from "./SoundcloudContainer.module.scss";
import Players from "./Players";

import { uniqueByUrl } from "../../data/clean-data"
import { scLinks } from "../../data/import-data"

class SoundcloudContainer extends Component {

  cleanData = arr => {
    let filteredarr = arr.filter(el => el.url)
    let uniq = uniqueByUrl(filteredarr)
    return uniq
  }

  render() {
    const cleanedData = this.props.data ? this.cleanData(this.props.data) : [];
    const players = cleanedData.length < 1 ? scLinks : cleanedData;

    return (
      <div className={styles.soundcloud}>
      <h3>Mixes</h3>
       <Players data={players} />
      </div>
    );
  }
}

export default SoundcloudContainer;
