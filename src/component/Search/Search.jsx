import React, { Component } from "react";
import styles from "./Search.module.scss";

class Search extends Component {



  render() {
    console.log(this.props)
    return (
      <nav className={styles.nav}>
        <h1>Track and DJ mix results</h1>
        <div className={styles.subtitles}>
          <ol> 
            <li>Search for an electronic track</li>  
            <li>Recieve release info</li>  
            <li>Recieve mixes featuring the track</li>  
          </ol>
          <h4>Search for a recent track and recieve results of its release and which mixes it's played in.</h4>
          <form>
            <div>
              <input type="text" placeholder="artist" onChange={(event) => this.props.handleChange(event, 'searchArtist')} />
              <input type="text" placeholder="track" onChange={(event) => this.props.handleChange(event, 'searchTrack')}/>
            </div>
            <button onClick={this.props.searchFunc}>Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Search;
