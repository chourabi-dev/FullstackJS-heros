import React from 'react';

export default class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        title:props.title,
        subject:props.subject,
        body:props.body,
        
    }


  }


  render(){
    return(
      <div >
          <p>
          <strong>{this.state.title}</strong><br/>
          <strong>{this.state.subject}</strong><br/>
         
         
          { this.state.body }
              
              
          </p>

          <hr/>
          


      </div>
    );
  }
}


