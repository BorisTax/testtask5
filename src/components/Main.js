import React, { Component } from 'react'
import Header from './Header';
import Welcome from './Welcome';
import YoutubeSection from './youtube/VideoSection';
import GallerySection from './gallery/GallerySection';
import GoUpButton from './GoUpButton';


export default class Main extends Component {

  render() {
    return (
      <div>
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

