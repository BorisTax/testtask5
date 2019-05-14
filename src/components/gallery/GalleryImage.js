import React from 'react'
import '../../app.css'


class GalleryImage extends React.Component{
    constructor(){
        super()
        this.state={loading:true}
    }
    shouldComponentUpdate(){
     return true;
    }
    onLoad(){
        this.setState({loading:false})
    }
    render(){
        const loading=(this.prevUrl!==this.props.url)||this.state.loading;
        const content=loading?<div className="spinner"></div>:""
        const displayImg=loading?"none":"inline"
        this.prevUrl=this.props.url;
        return (
            <div className="center-container">
                {content}
                <img id="mainImage" className="gallery-image"  
                     src={this.props.url} onLoad={this.onLoad.bind(this)}
                     style={{display:displayImg}}/>
            </div>
        );  
    }
}


export default GalleryImage
