import React, { Component } from 'react';
import styles from './App.module.scss';
import Search from './component/Search';
import ResultsContainer from './container/ResultsContainer';

class App extends Component {

  state = {
    searchArtist: '',
    searchTrack: '',
  }

  handleChange = (event, state) => this.setState({[state]: event.target.value})

  get searchTerm() {
    return this.state.searchArtist + ' ' + this.state.searchTrack;
  }

  search = (event) => {
    event.preventDefault();
    console.log('searching')
    this.showSpinners();

    fetch(`https://electronic-track-search-api.herokuapp.com/api/call/stageone/${this.searchTerm}`)
    .then(data => data.json())
    .then(jsonData => {
      this.setState({
        discogs: jsonData.discogs,
        youtube: jsonData.youtube,
        mixesdb: jsonData.mixesdb,
      })
      fetch('https://electronic-track-search-api.herokuapp.com/api/call/stagetwo/' + JSON.stringify(jsonData.mixesdb))
        .then(data => data.json())
        .then(jsonData => this.setState({
          soundcloud: jsonData.soundcloud,
        }))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error));
  }

  get discogsData() {
    return this.state.discogs;
  }

  get youtubeData() {
    return this.state.youtube;
  }

  get soundcloudData() {
    return this.state.soundcloud;
  }

showSpinners = () => ['discogs', 'youtube', 'soundcloud'].forEach(state => this.setState({[state]: 'spinner'})); 

showResults = () => this.state.discogs ? <ResultsContainer discogs={this.discogsData} youtube={this.youtubeData} soundcloud={this.soundcloudData} /> : '';

  render() {

    return (
      <main className={styles.main}>
        <Search handleChange={this.handleChange} searchFunc={this.search} />
        {this.showResults()}
      </main>
    );
  }
}

export default App;
