import React, { Component } from "react";
import styles from "./ResultsContainer.module.scss";
import Discogs from "../../component/Discogs";
import Youtube from "../../component/Youtube";
import SoundcloudContainer from "../../container/SoundcloudContainer";

class ResultsContainer extends Component {

  // mixesDbTitles = data => data.map(el => el.link.slice(el.link.indexOf('/w/')+16).replace(/_/g, ' '));
  // sendToSoundcloud = () => <SoundcloudContainer data={this.mixesDbTitles(this.props.mixesdb)} />;
  
  render() {

    const discogs = this.props.discogs ? <Discogs data={this.props.discogs} /> : '';
    const youtube = this.props.youtube ? <Youtube data={this.props.youtube} /> : '';
    const soundcloud = this.props.soundcloud ? <SoundcloudContainer data={this.props.soundcloud} /> : '';

    console.log(this.props)

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
