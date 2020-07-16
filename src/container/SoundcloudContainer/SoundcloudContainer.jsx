import React, { Component } from "react";
import styles from "./SoundcloudContainer.module.scss";
import { getRequests, uniqueByUrl } from "../../data/api-calls"
import { scLinks } from "../../data/import-data"
import Players from "./Players";

class SoundcloudContainer extends Component {

  state = {
    playersArray: [],
  }

  get requests() {
    return getRequests(this.props.data, this.props.keys);
  }
  
  getSoundcloudLinkRequest = (link) => {
    return fetch(link.url)
    .then(data => data.json())
    .then(jsonData => {
      let scUrl = jsonData.items.find(el => el.link.includes('https://soundcloud.com/')).link
      if (scUrl.match(/\//g).length === 4) {
        this.setState({ playersArray: [...this.state.playersArray, { title: link.title, url: scUrl }] }) // need to fix this 
      }
    })
    .catch(error => console.log(error));
  };
  
  runSearch = () => {
    if (this.state.playersArray.length === 0) {
      this.requests.forEach(obj => {
        this.getSoundcloudLinkRequest(obj);
      })
    }
  }

  componentDidMount() {
    this.runSearch();
  }

  render() {

    console.log(this.props)
    console.log(this.state)
    // const players = uniqueByUrl(this.state.playersArray).map(linkObj => <SoundcloudPlayer player={linkObj} />)

    return (
      <div className={styles.soundcloud}>
      <h3>Mixes</h3>
       <Players playersArray={this.state.playersArray} />
      </div>
    );
  }
}

export default SoundcloudContainer;
