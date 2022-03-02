import './reset.css';
import './App.scss';
import React from 'react';
import axios from 'axios';
import Main from './components/Main/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Video_individual from './components/Video_individual/Video_individual';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.url = "https://project-2-api.herokuapp.com/";
      this.apiKey = "120bcad4-29c9-44b6-9fb0-55962463aa05";
  }

  state = {
    videos: []
  }
  
  componentDidMount() {
    axios.get(this.url + 'videos?api_key=' + this.apiKey)
        .then(response => {
            console.log(response.data);
            const videos = response.data;
            this.setState({videos: videos});
            
            // const currentVideo = response.data[0];
            // this.setState({ videosList: videos });
            // this.setState({ currentVideo: currentVideo});
        })
    }

  handleVideoChange = (id) => {
    const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
    this.setState({
      currentVideo: this.state.videos[newVideoId]
    })
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main 
        videos={this.state.videos}
        currentVideo={this.state.videos[0]}
        handleVideoChange={this.handleVideoChange}
        />    
      </div>
      <Switch>
        <Route path={"/video1"} Component={Video_individual}/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
