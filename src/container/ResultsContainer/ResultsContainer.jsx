import React, { Component } from "react";
import styles from "./ResultsContainer.module.scss";
import Discogs from "../../component/Discogs";
import Youtube from "../../component/Youtube";
import SoundcloudContainer from "../../container/SoundcloudContainer";
var Spinner = require('react-spinkit');

class ResultsContainer extends Component {
  
  render() {

    const discogs = this.props.discogs ? <Discogs data={this.props.discogs} /> : '';
    const youtube = this.props.youtube ? <Youtube data={this.props.youtube} /> : '';
    const soundcloud = this.props.soundcloud === 'spinner' ? (
      <Spinner name='three-bounce' color='dark-grey' />
    ) : (
      <SoundcloudContainer data={this.props.soundcloud} />
    );

      return (
      <article className={styles.container}>
        <section className={styles.info}>
          { discogs }
          { youtube }
        </section>
        <section className={styles.mixes}>
          { soundcloud }
        </section>
      </article>
    );
  }
}

export default ResultsContainer;
