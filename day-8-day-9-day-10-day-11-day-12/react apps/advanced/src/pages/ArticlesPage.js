import React from 'react';
import { Link } from 'react-router-dom';
 


class ArticlesPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
        articles: [
            { id:15, title:"hello world" },
            { id:16, title:"hello world 2" },
            { id:17, title:"hello world 3" },
            
        ]
    }

    
  }



  render(){
    return(
      <div>
        <h1>articles page</h1>

        <ul>
            {
                this.state.articles.map((a)=>{
                    return <li> <Link to={ '/artilces/details/'+a.id  } >{a.title}</Link>  </li>
                })
            }
        </ul>
      </div>
    );
  }
}

export default ArticlesPage;
