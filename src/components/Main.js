import React, { Component } from 'react'
import Header from './Header';
import Welcome from './Welcome';
import YoutubeSection from './youtube/YoutubeSection';
import GallerySection from './gallery/GallerySection';
import GoUpButton from './GoUpButton';


export default class Main extends Component {

  render() {
    return (
      <div className="App">
        <Header {...this.props}/>
        <Welcome/>
        <YoutubeSection/>
        <br/>
        <GallerySection/>
        <GoUpButton/>
      </div>
    );
  }
}

