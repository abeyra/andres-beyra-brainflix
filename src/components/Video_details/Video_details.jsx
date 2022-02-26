import './Video_details.scss';
import React from 'react';
import Videos from '../../data/videos.json';
import Details from '../../data/video-details.json';
import Views from '../../assets/icons/views.svg';
import Likes from '../../assets/icons/likes.svg';

class Video_details extends React.Component {

    state = {
        videos: Videos,
        details: Details
    }



    render() {
        return (
            <>
            <section className="Video_details">
                <h1 className="Video_details-title">{this.state.details[0].title}</h1>
                <div className="Video_details-metrics">

                    <div className="Video_details-row">
                        <p className="Video_details-author">{"By " + this.state.details[0].channel}</p>
                         <p className="Video_details-date">{new Date (this.state.details[0].timestamp).toLocaleDateString("en-US")}</p>
                        
                    </div>

                    <div className="Video_details-row">

                       <div className="Video_details-views">
                            <img className="Video_details-views-icon" src={Views} alt="views icon" />
                            <p className="Video_details-views-number">{this.state.details[0].views}</p>
                        </div>
                        <div className="Video_details-likes">
                            <img className="Video_details-likes-icon" src={Likes} alt="likes icon" />
                            <p className="Video_details-likes-number">{this.state.details[0].likes}</p>
                        </div>
                        
                    </div>

                </div>

                <p className="Video_details-description">{this.state.details[0].description}</p>
               
            </section>
            </>
        )
    }
}

export default Video_details; 