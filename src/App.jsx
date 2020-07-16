import React, { Component } from 'react';
import styles from './App.module.scss';
import Search from './component/Search';
import ResultsContainer from './container/ResultsContainer';
import { urlDiscogs, urlMixesDB, urlYoutube } from './data/api-calls';

class App extends Component {

  state = {
    searchArtist: '',
    searchTrack: '',
  }

  componentDidMount() {
    fetch('https://electronic-search-api-keys.herokuapp.com/mykeys')
      .then(data => data.json())
      .then(jsonData => this.setState({keys:jsonData.results}))
      .catch(error => console.log(error))
  }

  handleChange = (event, state) => this.setState({[state]: event.target.value})

  get searchTerm() {
    return this.state.searchArtist + ' ' + this.state.searchTrack;
  }

  search = (event) => {
    event.preventDefault();
    console.log('searching')

    fetch(urlDiscogs(this.searchTerm, this.state.keys.keyDiscogs))
    .then(data => data.json())
    .then(jsonData => { this.setState({ discogs: jsonData.results[0]}) })
    .catch(error => console.log(error)); 
      
    fetch(urlYoutube(this.searchTerm, this.state.keys.keyGoogleYoutube))
    .then((data) => data.json())
    .then(jsonData => { this.setState({ youtube: jsonData.items[0].id.videoId}) })
    .catch(error => console.log(error));

    fetch(urlMixesDB(this.searchTerm, this.state.keys.keyGoogleMixesDb))
    .then((data) => data.json())
    .then(jsonData => { this.setState({ mixesdb: jsonData.items}) })
    .catch(error => console.log(error));
  }


  get discogsData() {
    return this.state.discogs;
  }

  get youtubeData() {
    return this.state.youtube;
  }

  get mixesDbData() {
    return this.state.mixesdb;
  }

showSpinners = () => ['discogs', 'youtube'].forEach(state => this.setState({[state]: 'spinner'})); 

showResults = () => this.state.discogs ? <ResultsContainer discogs={this.discogsData} youtube={this.youtubeData} mixesdb={this.mixesDbData} keys={this.state.keys.keyGoogleSoundcloudKeys} /> : '';

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
