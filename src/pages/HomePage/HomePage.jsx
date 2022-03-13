import Main from "../../components/Main/Main";
import { Component } from "react";
import axios from "axios";

const url = "http://localhost:8080/videos";

export default class HomePage extends Component {
  state = {
    videos: [],
    currentVideo: [],
    comments: [],
  };

  getVideoById = (id) => {
    axios.get(url + '/' + id).then((response) => {
        this.setState({
          currentVideo: response.data,
          comments: response.data.comments,
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    axios.get(url).then((response) => {
      const allVideos = response.data;
      this.setState({
        videos: allVideos,
      });
      const videoId = this.props.match.params.id || response.data[0].id;
      this.getVideoById(videoId);
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidUpdate(prevProps, prevState) {
     const videoId = this.props.match.params.id || this.state.videos[0].id;
    if (prevState.currentVideo && prevState.currentVideo.id !== videoId) {
      this.getVideoById(videoId);
    }
  }

  render() {
    return (
      <>
        <Main
          videos={this.state.videos}
          currentVideo={this.state.currentVideo}
          comments={this.state.comments}
        />
      </>
    );
  }
}
