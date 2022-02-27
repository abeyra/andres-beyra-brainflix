import './reset.css';
import './App.scss';
import React from 'react';
import video_data from './data/video-details.json';
import Main from './components/Main/Main';

class App extends React.Component {

  state = {
    videos: video_data,
    currentVideo: video_data[0] 
  }

  handleVideoChange = (id) => {
    const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
    this.setState({
      currentVideo: this.state.videos[newVideoId]
    })
  }

  render() {
    return (
      <div className="App">
        <Main 
        videos={this.state.videos}
        currentVideo={this.state.currentVideo}
        handleVideoChange={this.handleVideoChange}
        />
         
      </div>
    );
  }
}

export default App;
