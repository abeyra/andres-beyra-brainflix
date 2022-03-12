import './reset.css';
import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
            <Switch>
              <Route path="/upload" component={UploadPage}/>
              <Route path="/videos/:id" component={HomePage}/>
              <Route path="/" exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
