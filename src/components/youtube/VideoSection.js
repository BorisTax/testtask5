import React from 'react'
import {connect} from 'react-redux'
import '../../app.css'
import VideoPlayer from './VideoPlayer';
import { getPopularVideos, getVideoInfo } from '../../actions';
import VideoList from './VideoList';


class VideoSection extends React.Component {
    constructor(){
        super()
        this.state={videos:[]}
    }
    
    componentDidMount(){
        getPopularVideos()//загрузка топ видео с youtube
              .then(res=>res.json())
              .then(res=>{//из каждого видео сохраняем только id, название и картинку-превью
                    const state=res.items.map((item)=>{ 
                         const video={}
                         video.id=item.id;
                         video.title=item.snippet.localized.title;
                         video.thumbnails=item.snippet.thumbnails;
                         return video
                         })
                    this.setState(()=>({videos:state})); 
                    const ids=state.map(item=>item.id).join()
                    getVideoInfo(ids)//запрашиваем отдельно статистику для всех видео
                         .then(res=>res.json())
                         .then(res=>{
                             const nextState=res.items.map((item)=>{
                                  //выбираем только количество просмотров
                                  const video=Object.assign({},state.find(elem=>elem.id===item.id))
                                  video.viewCount=item.statistics.viewCount;
                                  return video
                                  })
                             this.setState({videos:nextState})
                         })
                         .catch(err=>console.error(err))              
              })
              .catch(err=>console.error(err))
    }

    render(){
        return (
            <div className="video-section">
                {this.props.videoId?<VideoPlayer id={this.props.videoId}/>:<div></div>}
                <br/>
                <p className="title-container noselect"> Топ 10 видео&nbsp; <a href="https://youtube.com"> YouTube:</a></p>
                {this.state.videos.length!==0?<VideoList videos={this.state.videos}/>:<div></div>}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        videoId:state.app.videoId
    }
}

export default connect(mapStateToProps)(VideoSection)
