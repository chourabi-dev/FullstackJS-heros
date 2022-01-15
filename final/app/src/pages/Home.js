
import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
  }


  checkAuthToken(){
      return localStorage.getItem('token');
  }

  componentDidMount(){
      // redirect to sign in page if not connected !!
      if (this.checkAuthToken() == null) {
        this.props.history.push('/auth')
      }
  }



  render(){
    return(
    <div> 

       home

    </div>
    );
  }
}

export default Home;
