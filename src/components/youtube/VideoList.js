import React from 'react'
import '../../app.css'
import VideoElement from './VideoElement';

//компонент отображающий список видео
class VideoList extends React.Component {
  componentDidUpdate(){
    //создаем список видео в виде карусели
    window.$(".owl-carousel").owlCarousel({
          items: 3,
          margin: 10,
          loop: true,
          nav: true,
          responsiveClass: true,
          responsive:{
            0:{items:1},
            200:{items:2},
            768:{items:5},
            1180:{items:8}
          }
        }); 
  }

  render(){
    const videos=this.props.videos.map((item,index)=>{
                        return <VideoElement video={item} key={index}/>
                        })
    return (<div className="">
        <div className="owl-carousel owl-theme video-list-container">
         {videos}
        </div>
        </div>
    );
  }
}


export default VideoList
