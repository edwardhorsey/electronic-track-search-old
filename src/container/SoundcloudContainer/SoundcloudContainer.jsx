import React, { Component } from "react";
import styles from "./SoundcloudContainer.module.scss";

import { uniqueByUrl } from "../../data/api-calls"
import Players from "./Players";

class SoundcloudContainer extends Component {

  cleanData = arr => {
    let filteredarr = arr.filter(el => el.url)
    let uniq = uniqueByUrl(filteredarr)
    return uniq
  }

  render() {

    console.log(this.props)
    const players = this.cleanData(this.props.data)
    return (
      <div className={styles.soundcloud}>
      <h3>Mixes</h3>
       <Players data={players} />
      </div>
    );
  }
}

export default SoundcloudContainer;
