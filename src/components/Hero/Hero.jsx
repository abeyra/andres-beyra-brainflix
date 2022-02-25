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
            <video className="hero__video" poster={this.state.Videos1[0].image} controls></video>
            </>
        )
    }     



}

export default Hero; 