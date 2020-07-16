import React, { Component } from "react";
// import styles from "./Youtube.module.scss";
import ReactPlayer from "react-player";
const Spinner = require('react-spinkit');

class Youtube extends Component {

  render = () => this.props.data === 'spinner' ? <Spinner name='three-bounce' color='dark-grey' /> : <ReactPlayer width={'100%'} url={this.url} />;

  get url() {
    return `https://www.youtube.com/watch?v=${this.props.data}`
  }

  render() {
    return this.render()
  }
}

export default Youtube;