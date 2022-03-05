import './reset.css';
import './App.scss';
import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import UploadPage from './components/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

    return (
      <>
        <div className="App">
          <BrowserRouter>
            <Header />
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/upload" component={UploadPage} />
                <Route path="/videos/:id" component={Main}/>
              </Switch>
          </BrowserRouter>
        </div>
      </>
    )
}

export default App;
