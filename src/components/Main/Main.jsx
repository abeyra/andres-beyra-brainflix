import './Main.scss';
import Hero from '../Hero/Hero';
import React from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import VIDEO_DETAILS from '../Video_details/Video_details';
// import COMMENTS_FORM from '../Comments_form/Comments_form';
// import VIDEO_COMMENTS from '../Video_comments/Video_comments';
import VIDEO_LIST from '../Video_list/Video_list';

class Main extends React.Component {

    constructor(props) {
      super(props);
      this.url = "https://project-2-api.herokuapp.com/";
      this.apiKey = "120bcad4-29c9-44b6-9fb0-55962463aa05";
  }

  state = {
    videos: [],
    currentVideo: [],
    allVideos: []
  }
  
  componentDidMount() {
    // const { videoId } = this.props.match.params;
    axios.get(this.url + 'videos?api_key=' + this.apiKey)
        .then(response => {
            console.log(response.data);
            const videos = response.data;
            this.setState({
                    videos: videos,
                    currentVideo: response.data[0]
                });

        axios.get(this.url + 'videos/' +  this.state.currentVideo.id +  '?api_key=' + this.apiKey)
            .then(response => {
                console.log(response.data);

                this.setState({
                        currentVideo: response.data
                    });

                })
            })
    
    }

    // componentDidMount() {
    // // const { videoId } = this.props.match.params;
    
    // }

    // componentDidUpdate(props) {
    //     console.log("update?");
    //     const { videoId } = this.props.match.params;
    //     if (videoId !== props.match.params.videoId) {
    //     console.log("Yes!!");
    //         axios.get(this.url + 'videos/:id?api_key=' + this.apiKey)
    //         .then(response => {
    //             console.log(response.data);
    //             const currentVideo = response.data;
    //         })
    //     }
    // }

  handleVideoChange = (id) => {
    const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
    this.setState({
      currentVideo: this.state.videos[newVideoId]
    })
  }

    render() {
        return (
            <>
            <Hero 
                currentVideo={this.state.currentVideo}
            />
            <section className="Main__container">
            <div className="Main__container-left">
            <VIDEO_DETAILS 
                // videos={this.state.videos}
                currentVideo={this.state.currentVideo}
                // handleVideoChange={this.handleVideoChange}
            />
            {/* <COMMENTS_FORM /> */}
            {/* <VIDEO_COMMENTS 
                // key={this.state.videos[0].id}
                videos={this.state.videos}
                currentVideo={this.state.videos[0]}
                handleVideoChange={this.handleVideoChange}
            /> */}
            </div>
            <div className="Main__container-right"> 
            <VIDEO_LIST 
                allVideos={this.state.allVideos}
                videos={this.state.videos}
                currentVideo={this.state.currentVideo}
                handleVideoChange={this.handleVideoChange}
            />
            </div>
            </section>
        
            </>
        )
    }
}

export default Main; 