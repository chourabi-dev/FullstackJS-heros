import React from 'react';
 


class ArticleDetailsPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        id:props.match.params.id
    }

    console.log(props);
  }



  render(){
    return(
      <div>
        <h1>Loading article N° {this.state.id} details ...</h1>
      </div>
    );
  }
}

export default ArticleDetailsPage;
