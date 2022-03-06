import './reset.css';
import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import UploadPage from './components/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App() {

  // let submit = (event) => {
  //   alert("Video Uploaded!");
  //   <Redirect to="/" />
  // }

  let handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; 
        const title = form.videoTitle.value;
        const description = form.videoDescription.value;
        if(title && description){
            alert("Upload Successful!")
        } else {
            alert("fill out form!")
        }
    }

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
            <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/upload" component={UploadPage} handleSubmit={handleSubmit}/>
              <Route path="/videos/:id" component={Main}/>
            </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
