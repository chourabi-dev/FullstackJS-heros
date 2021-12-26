import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Navbar from './compos/Navbar';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailsPage from './pages/ArticleDetailsPage';
import ServerCall from './pages/ServerCall';


class App extends React.Component{
  constructor(props){
    super(props);
  } 
  render(){
    return(
      <div>
        <Router>

          


          <Switch> 
              <Route path="/"  component={ HomePage } exact />
              <Route path="/server"  component={ ServerCall } exact />
                  
              <Route path="/home"  component={ HomePage }  exact />  
              <Route path="/contact"  component={ ContactPage } exact />  
              <Route path="/artilces"  component={ ArticlesPage } exact /> 
              <Route path="/artilces/details/:id"  component={ ArticleDetailsPage } exact /> 
               
              
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
