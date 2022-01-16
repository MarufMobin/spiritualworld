import React from 'react';
import './HeaderSection.css';
import soulVideo from '../../../media/video/background-video.mp4'
import Navigation from '../../Shared/Navigation/Navigation';

const HeaderSection = () => {
    return (
        <section className='header-section'>
                <video src={soulVideo} autoPlay loop muted className='header-video'></video>
                <Navigation></Navigation>
        </section>
    );
};

export default HeaderSection;