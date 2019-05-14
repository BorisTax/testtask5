import React from 'react'
import '../../app.css'
import YoutubeLink from './YoutubeLink';

const YoutubeList = (props)=> {
    /* const carouselPages=[]
    let k=0
    if(props.videos.length===0)return <div></div>
    let i=0;
    while(i<props.videos.length){
      let page=[]
      while(page.length<props.count)
         {
           page.push(<YoutubeLink video={props.videos[k]}/>)
           k++
           if(k===props.videos.length) break;
        }
      let j=0
      while(page.length<props.count){
          page.push(<YoutubeLink video={props.videos[j]}/>)
          k++
          j++;
          }
        if(i===0)
              carouselPages.push(<div  key={k} className="carousel-item active">{page}</div>)
              else
              carouselPages.push(<div  key={k} className="carousel-item">{page}</div>)
              
        i+=props.count;
        
      } */
    

    /* const videos=props.videos.map((item,index)=> 
                                        index==0?
                                        <div  key={index} className="carousel-item active"><YoutubeLink video={item}/></div>:
                                        <div  key={index} className="carousel-item"><YoutubeLink video={item} key={index}/></div>
                                        )  */
   /*  const carouselIndicators=carouselPages.map((item,index)=>
                                        index==0?
                                        <li data-target="#demo" data-slide-to={index}  className="active"  key={index}></li>:
                                        <li data-target="#demo" data-slide-to={index}  key={index}></li>
                                        )  */
    const videos=props.videos.map((item,index)=>{
                        return <YoutubeLink video={item} key={index}/>
                        })
    return (
      <div >
        <div className="video-list-container">
          {videos}
        </div>
        </div>


       /* <div className="carousel-container">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                {carouselIndicators}
              </ul>
                <div className="carousel-inner">
                {carouselPages}
                </div>
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div> */
    );
}


export default YoutubeList
