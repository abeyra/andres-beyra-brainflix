import './reset.css';
import './App.scss';
import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  // constructor(props) {
  //     super(props);
  //     this.url = "https://project-2-api.herokuapp.com/";
  //     this.apiKey = "120bcad4-29c9-44b6-9fb0-55962463aa05";
  // }

  // state = {
  //   videos: []
  // }
  
  // componentDidMount() {
  //   axios.get(this.url + 'videos?api_key=' + this.apiKey)
  //       .then(response => {
  //           console.log(response.data);
  //           const videos = response.data;
  //           this.setState({videos: videos});
            
  //           // const currentVideo = response.data[0];
  //           // this.setState({ videosList: videos });
  //           // this.setState({ currentVideo: currentVideo});
  //       })
  //   }

  // handleVideoChange = (id) => {
  //   const newVideoId = this.state.videos.findIndex(videos => id === videos.id)
  //   this.setState({
  //     currentVideo: this.state.videos[newVideoId]
  //   })
  // }

  // render() {
    return (
      <>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}/>
      <div className="App">
        <Main />    
      </div>
      </Switch>
      </BrowserRouter>
      </>
    )
  // }
}

export default App;
