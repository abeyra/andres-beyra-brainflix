import Main from "../../components/Main/Main";
import { Component } from "react";
import axios from "axios";

const url = "http://localhost:5001/videos/";

export default class HomePage extends Component {
  state = {
    videos: [],
    currentVideo: [],
    comments: [],
  };

  componentDidMount() {
    axios.get(url).then((response) => {
      console.log(response.data);
      const allVideos = response.data;
      this.setState({
        videos: allVideos,
        currentVideo: response.data[0],
        comments: response.data[0].comments,
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if (id !== prevProps.match.params.id) {
      axios.get(url + this.props.match.params.id).then((response) => {
        console.log(response.data);
        this.setState({
          currentVideo: response.data,
          comments: response.data.comments,
        });
      });
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
