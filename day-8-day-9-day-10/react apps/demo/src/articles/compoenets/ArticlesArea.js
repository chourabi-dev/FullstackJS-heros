import React from 'react';
import Article from './Article';
import ArtcileAddForm from './Form';

export default class ArticlesArea extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        articles: []
        
    }

    this.addNewArticle = this.addNewArticle.bind(this);

  }


  addNewArticle(data){
    let image = this.state.articles;

    image.push(data);

    this.setState({
        articles :  image
    })
  }


  render(){
    return(
      <div >
          <ArtcileAddForm addFN={ this.addNewArticle } />


            <h3>List of articles : </h3>

          {
              this.state.articles.map((a)=>{
                  return <Article key={ a.title }  title={ a.title }body={ a.body }subject={ a.subject }  />
              })
          }


      </div>
    );
  }
}


