import './reset.css';
import './App.scss';
import React from 'react';
import HeaderPage from './components/HeaderPage/HeaderPage';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderPage />
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
