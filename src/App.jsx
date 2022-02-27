import './reset.css';
import './App.scss';
import React from 'react';
import Video_data from './data/video-details.json';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Video_details from './components/Video_details/Video_details';
import Comments_form from './components/Comments_form/Comments_form';
import Video_comments from './components/Video_comments/Video_comments';
import Video_list from './components/Video_list/Video_list';

class App extends React.Component {

  state = {
    Videos: Video_data,
    currentVideo: Video_data[0] 
  }

  handleVideoChange = (id) => {
    const newVideoId = this.state.Videos.findIndex(video => === video.id)
    this.setState({
      currentVideo: this.state.Videos[newVideoId]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Hero 
        Videos={this.state.Videos}
        currentVideo={this.state.currentVideo}
        handleVideoChange={this.handleVideoChange}
        />
        <Video_details 
        Videos={this.state.Videos}
        currentVideo={this.state.currentVideo}
        handleVideoChange={this.handleVideoChange}
        />
        <Comments_form />
        <Video_comments />
        <Video_list />
      </div>
    );
  }
}

export default App;
