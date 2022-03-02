import './Video_list.scss';
import VIDEO_INDIVIDUAL from '../Video_individual/Video_individual';
// import React from 'react';
// import axios from 'axios';

export default function Video_list ({videos, currentVideo, handleVideoChange})  {

//     constructor(props) {
//         super(props);
//         this.url = "https://project-2-api.herokuapp.com/";
//         this.apiKey = "120bcad4-29c9-44b6-9fb0-55962463aa05";
//     }

//     state = {
//         videos: []
//     }

//     componentDidMount() {
//         axios.get(this.url + 'videos?api_key=' + this.apiKey)
//             .then(response => {
//                 console.log(response.data);
//                 const videos = response.data;
//                 this.setState({videos})
                
//                 // var currentVideo = videos[0];
//                 // this.setState({ videosList: videos });
//                 // this.setState({ currentVideo: videos[0]});
//             })
//     }

//     handleVideoChange = (id) => {
//         const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
//         this.setState({
//         currentVideo: this.state.videos[newVideoId]
//         })
//   }

    // render() {
        return (
            <>
                <section className="Video-list">
                    <h3 className="Video-list__title">NEXT VIDEOS</h3>
                    <ul className="Video-list__videos">
                        {videos
                        .filter(video => video.id !== currentVideo.id)
                            .map((video) => {
                                return (
                                    // <h1>{video.title}</h1>
                                    <VIDEO_INDIVIDUAL 
                                        key={video.id}
                                        id={video.id}
                                        image={video.image}
                                        title={video.title}
                                        channel={video.channel}
                                        handleVideoChange={handleVideoChange}                         
                                    />
                                )
                            })
                        }
                    </ul>
                </section>                    
            </>
        )
    // }
}
