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
     const {id,title,thumbnails,viewCount}={...this.props.video}
     const url=thumbnails.standard.url
     return (
        <a className="video-list-element" href="#"  onClick={this.onClick.bind(this,id)} title={title}>
        <img  className="video-element-img img-responsive"
              src={url}
              alt=""
              />
       <div className="video-element-caption">
          <div className="video-element-title">{title}</div>
          <div className="video-view-count">{viewCount} просмотров</div>
        </div>
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
