import React from 'react'
import {connect} from 'react-redux'
import '../../app.css'
import { setImageUrl } from '../../actions';

const GalleryLink = (props)=> {
    const onClick=(url,e)=>{
      e.preventDefault();
      props.setImageUrl(url);
      props.scrollTo()
    }
     return (
      <a href="#" className="gallery-element" onClick={onClick.bind(null,props.image.largeImageUrl)}>
        <img  className="img-thumbnail"
              src={props.image.prevUrl} 
              width={props.image.prevWidth}
              height={props.image.prevHeight}
              alt=""/>
      </a>
    );
}

const mapDispatchToProps=(dispatch)=>{
  return {
    setImageUrl:(url)=>dispatch(setImageUrl(url))
  }
}
export default connect(null,mapDispatchToProps)(GalleryLink)
