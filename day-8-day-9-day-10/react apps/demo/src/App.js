import React from 'react';
import './App.css';
import ArticlesArea from './articles/compoenets/ArticlesArea';
import ArtcileAddForm from './articles/compoenets/Form';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }


  }


  render(){
    return(
      <div >
          
            <ArticlesArea />

      </div>
    );
  }
}



export default App;
