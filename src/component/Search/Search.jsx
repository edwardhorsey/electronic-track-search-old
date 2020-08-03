import React, { Component } from "react";
import styles from "./Search.module.scss";
import '../../data/fa-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Search extends Component {

  render() {
    return (
      <nav className={styles.nav}>
        <h1>Track and DJ mix results</h1>
        <p>Made by Edward Horsey <a href="https://github.com/edwardhorsey" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} /></a></p>
        <p>Disclaimer: If your first search takes longer than 15 seconds, please click again</p>
        <div className={styles.subtitles}>
          <ol> 
            <li>Search for an electronic track</li>  
            <li>Receive release info</li>  
            <li>Receive mixes featuring the track</li>  
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
