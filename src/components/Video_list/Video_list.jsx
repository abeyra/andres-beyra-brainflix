import './Video_list.scss';
import React from 'react';
import Videos from '../../data/videos.json';

class Video_list extends React.Component {

    state = {
        videos: Videos
    }
    render() {
        return (
            <>
            <section className="Video-list">
                <h3 className="Video-list__title">NEXT VIDEOS</h3>

                <ul className="Video-list__videos">

                    {this.state.videos.map((video) => {
                        return (
                            <li className="Video-list__video">
                                <img className="Video-list__video-image" src={video.image} alt="video image" />
                                <div className="Video-list__video-content">
                                    <p className="Video-list__video-content-title">{video.title}</p>
                                    <p className="Video-list__video-content-channel">{video.channel}</p>
                                </div>

                            </li>
                        )


                    })}

                </ul>

            </section>
                        
            </>
        )
    }
}

export default Video_list;