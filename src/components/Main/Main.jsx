import './Main.scss';
import Hero from '../Hero/Hero';
import React from 'react';
import axios from 'axios';
import VIDEO_DETAILS from '../Video_details/Video_details';
import COMMENTS_FORM from '../Comments_form/Comments_form';
import VIDEO_COMMENTS from '../Video_comments/Video_comments';
import VIDEO_LIST from '../Video_list/Video_list';

const url = "https://project-2-api.herokuapp.com/videos/";
const apiKey = "?api_key=120bcad4-29c9-44b6-9fb0-55962463aa05";

class Main extends React.Component {

  state = {
    videos: [],
    currentVideo: [],
    comments: []
  }
  
  componentDidMount() {
    // const { videoId } = this.props.match.params;
    axios.get(url + apiKey)
        .then(response => {
            console.log(response.data);
            const videos = response.data;
            this.setState({
                    videos: videos,
                    currentVideo: response.data[0]
                });

        
        axios.get(url + this.state.currentVideo.id + apiKey)
            .then(response => {
                console.log(response.data);

                this.setState({
                        currentVideo: response.data,
                        comments: response.data.comments
                    });
                })
            })
    }

    componentDidUpdate(prevProps) {
        console.log("update?");
        console.log(this.props.match);
        const { id } = this.props.match.params;
        if (id !== prevProps.match.params.id) {
        console.log("Yes!!");
            axios.get(url + this.props.match.params.id + apiKey)
            .then(response => {
                console.log("First time printing!");
                console.log(response.data);
                this.setState({
                    currentVideo: response.data,
                    comments: response.data.comments
                })            
            })
        }
    }

//   handleVideoChange = (id) => {
//     const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
//     this.setState({
//       currentVideo: this.state.videos[newVideoId]
//     })
//   }

    render() {
        return (
            <>
                <Hero 
                    currentVideo={this.state.currentVideo}
                />
                <section className="Main__container">
                <div className="Main__container-left">
                    <VIDEO_DETAILS 
                        currentVideo={this.state.currentVideo}
                    />
                    <COMMENTS_FORM />
                    <VIDEO_COMMENTS 
                        comments={this.state.comments}
                    />
                </div>
                <div className="Main__container-right"> 
                    <VIDEO_LIST 
                        videos={this.state.videos}
                        currentVideo={this.state.currentVideo}
                    />
                </div>
                </section>
            </>
        )
    }
}

export default Main; 