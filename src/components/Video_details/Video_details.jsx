import './Video_details.scss';
import React from 'react';
import Views from '../../assets/icons/views.svg';
import Likes from '../../assets/icons/likes.svg';

export default function Video_details({currentVideo}) {
    
    return (
        <>
            <section className="Video_details">
                <h1 className="Video_details-title">{currentVideo.title}</h1>
                <div className="Video_details-metrics">
                    <div className="Video_details-row">
                        <p className="Video_details-author">{"By " + currentVideo.channel}</p>
                        <p className="Video_details-date">{new Date (currentVideo.timestamp).toLocaleDateString("en-US")}</p>
                    </div>
                    <div className="Video_details-row">
                    <div className="Video_details-views">
                            <img className="Video_details-views-icon" src={Views} alt="views icon" />
                            <p className="Video_details-views-number">{currentVideo.views}</p>
                        </div>
                        <div className="Video_details-likes">
                            <img className="Video_details-likes-icon" src={Likes} alt="likes icon" />
                            <p className="Video_details-likes-number">{currentVideo.likes}</p>
                        </div>                
                    </div>
                </div>
                <p className="Video_details-description">{currentVideo.description}</p>        
            </section>
        </>
    )
}
