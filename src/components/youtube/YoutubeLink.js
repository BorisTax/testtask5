import React from 'react'
import {connect} from 'react-redux'
import '../../app.css'
import { setVideoId } from '../../actions';

class YoutubeLink extends React.Component {
    onClick(id,e){
      e.preventDefault();
      this.props.setVideoId(id);
      window.scrollTo({
        top:0,
        behavior: "smooth"
    });
    }

    render(){
     return (
        <a className="video-element" href="#"  onClick={this.onClick.bind(this,this.props.video.id)} title={this.props.video.title}>
        <img  className="video-element-img"
              src={this.props.video.thumbnails.medium.url} 
              width={this.props.video.thumbnails.medium.width}
              height={this.props.video.thumbnails.medium.height}/>
        <span className="video-title">
          <span>{this.props.video.title}</span>
          <span>{this.props.video.viewCount}  просмотров</span>
          
        </span>
      </a>
    );
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    setVideoId:(id)=>dispatch(setVideoId(id))
  }
}
export default connect(null,mapDispatchToProps)(YoutubeLink)
