import React from 'react'
import {connect} from 'react-redux'
import '../../app.css'
import YoutubePlayer from './YoutubePlayer';
import { getPopularVideos, getVideoInfo } from '../../actions';
import YoutubeList from './YoutubeList';


class YoutubeSection extends React.Component {
    constructor(){
        super()
        this.state={videos:[]}
    }

    componentDidMount(){
        getPopularVideos()
              .then(res=>res.json())
              .then(res=>{
                    const state=res.items.map((item)=>{
                         const video={}
                         video.id=item.id;
                         video.title=item.snippet.localized.title;
                         video.thumbnails=item.snippet.thumbnails;
                         return video
                         })
                    this.setState({videos:state}); 
                    const ids=state.map(item=>item.id).join()
                    console.log(ids)                    
                    getVideoInfo(ids)
                         .then(res=>res.json())
                         .then(res=>{
                             const state=res.items.map((item)=>{
                                  const video=Object.assign({},this.state.videos.find(elem=>elem.id===item.id))
                                  video.viewCount=item.statistics.viewCount;
                                  return video
                                  })
                             this.setState(()=>({videos:state}))
                         })
                         .catch(err=>console.error(err))              
              })
              .catch(err=>console.error(err))
    }

    render(){
        return (
            <div >
                {this.props.videoId?<YoutubePlayer id={this.props.videoId}/>:<div></div>}
                <br/>
                <p className="title-container noselect">Топ 10 видео YouTube:</p>
                <YoutubeList videos={this.state.videos}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        videoId:state.app.videoId
    }
}

export default connect(mapStateToProps)(YoutubeSection)
