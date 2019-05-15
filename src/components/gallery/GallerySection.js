import React from 'react'
import {connect} from 'react-redux'
import '../../app.css'
import GalleryImage from './GalleryImage';
import { getImages } from '../../actions';
import GalleryList from './GalleryList';


class GallerySection extends React.Component {
    constructor(){
        super()
        this.state={images:[]}
    }
    scrollTo(){
        const elem=document.querySelector('#galleryImageTag')
        window.scrollTo({
            top: elem.offsetTop,
            behavior: "smooth"
        });
    }
    
    shouldComponentUpdate(){
        return true;
    }
    componentDidMount(){
        getImages()
              .then(res=>res.json())
              .then(res=>{
                    const state=res.hits.map(item=>{
                                    const image={}
                                    image.largeImageUrl=item.largeImageURL;
                                    image.width=item.imageWidth;
                                    image.height=item.imageHeight;
                                    image.prevUrl=item.previewURL;
                                    image.prevWidth=item.previewWidth;
                                    image.prevHeight=item.previewHeight;
                                    return image
                                    })
                    this.setState({images:state});                
              })
              .catch(err=>{console.error(err)})
    }
    render(){
        return (
            <div >
                <p  id="galleryImageTag" className="title-container noselect">Галерея&nbsp; <a href="https://pixabay.com"> Pixabay.com</a>:</p>
                {this.props.imageUrl?<GalleryImage url={this.props.imageUrl}/>:<div></div>}
                <GalleryList images={this.state.images} scrollTo={this.scrollTo}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        imageUrl:state.app.imageUrl,
        rand:state.app.rand,
    }
}

export default connect(mapStateToProps)(GallerySection)
