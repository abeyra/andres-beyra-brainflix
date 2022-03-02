import './Hero.scss'; 
import React from 'react';

export default function Hero({currentVideo}) {
    
        return (
            <>
            <div className="hero__container">
                <video className="hero__video" poster={currentVideo.image} controls></video>
                {/* <h1>{currentVideo.title}</h1> */}
            </div>
            </>
        )    

}
