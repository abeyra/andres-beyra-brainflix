import './Hero.scss'; 
import React from 'react';
import Videos from '../../data/videos.json';
import Details from '../../data/video-details.json';

class Hero extends React.Component {
    
    state = { 
        videos: Videos,
        details: Details 
     }


    render() {
        return (
            <>
            <div className="hero__container">
                <video className="hero__video" poster={this.state.videos[0].image} controls></video>
            </div>
            </>
        )
    }     



}

export default Hero; 