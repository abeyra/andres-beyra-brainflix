import './Hero.scss'; 
import React from 'react';
import Videos from '../../data/videos.json';
import Details from '../../data/video-details.json';

class Hero extends React.Component {
    
    state = { 
        Videos1: Videos,
        Details1: Details 
     }


    render() {
        return (
            <>
            <div className="hero__container">
                <video className="hero__video" poster={this.state.Videos1[0].image} controls></video>
            </div>
            </>
        )
    }     



}

export default Hero; 