import React from 'react';
import './Background.css';
import soulVideo from '../../../media/video/background-video.mp4'

const Background = () => {
    return (
        <section className='background-section'>
            <video src={soulVideo} autoPlay loop muted className='banner-video'></video>
        </section>
    );
};

export default Background;