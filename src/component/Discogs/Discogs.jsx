import React, { Component } from "react";
import styles from "./Discogs.module.scss";
// import { Pulseloader } from "halogenium";
var Spinner = require('react-spinkit');

class Discogs extends Component {
  
  render = () => this.props.data === 'spinner' ? <Spinner name='three-bounce' color='dark-grey' /> : this.renderResults(this.props.data);

  renderResults = (data) => {
    return (
    <div className={styles.whole}>
      <h3>{data.title}</h3>
      <div className={"styles.content"}>
        <img src={data['cover_image']} alt={'release album cover'}/>
        <div className={styles.text}>
          <p>Label: {data.label}</p>
          <p>Country: {data.country}</p>
          <p> Year: {data.year}</p>
          <p>Style: {data.style}</p>
          <p>Format: {data.format.join(' ')}</p>
        </div>
      </div>
    </div>
    )
  }

  render() {
    return (
        <>{this.render()}</>
    );
  }
}

export default Discogs;
