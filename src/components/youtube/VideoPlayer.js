import React from 'react'
import '../../app.css'


const YoutubePlayer = (props) => {
    return (
        <div className="center-container">
            <iframe width="480" height="270" src={"https://www.youtube.com/embed/"+props.id} frameBorder="2" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}


export default YoutubePlayer
