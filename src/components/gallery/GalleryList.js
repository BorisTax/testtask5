import React from 'react'
import '../../app.css'
import GalleryLink from './GalleryLink';

const GalleryList = (props)=> {
    const images=props.images.map((item,index)=><GalleryLink image={item} key={index} scrollTo={props.scrollTo}/>)
    return (
        <div className="center-container">
            {images}
          </div>
    );
}


export default GalleryList
