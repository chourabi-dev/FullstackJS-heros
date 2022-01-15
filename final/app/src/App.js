import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

class App extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
    <div> 

      <Router>
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/create-account'} component={Signup}  exact/>
          <Route path={'/auth'}  component={Signin} exact />
          
        </Switch> 
      </Router>

    </div>
    );
  }
}

export default App;
