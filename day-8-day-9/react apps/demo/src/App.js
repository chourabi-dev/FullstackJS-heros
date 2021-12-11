import React from 'react';
import './App.css';
import LikeButton from './class-compoenets/LikeButton';
import ToggleButton from './class-compoenets/toggleButton';

/**
 * function App() {

  let employees = [
    { fullname:"chourabi taher", email:"tchourabi@gmail.com", year: 2006 },
    { fullname:"chourabi taher 2", email:"tchourabi@gmail.com", year: 2010 },
    { fullname:"chourabi taher 2", email:"tchourabi@gmail.com", year: 20015 },
    
    
  ];

  let hero = <h1>Chourabi taher</h1>; // JSX

  return (
    <div>

      <Navbar />

      <hr/>

      <h3>List of employees</h3>

     
      
     
      
      

      <ul>
        {
          employees.map((e)=>{
            return (
              <EmployeeItem fullname={e.fullname} email={e.email} year={e.year} />
            );
          })
        }
      </ul>
      
    </div>
  );
} // react compoenent

 */



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      darkMode: false
    }



    this.siwtchMode = this.siwtchMode.bind(this);
  }


  componentDidMount(){
    console.log("did mount");
  }

  componentDidUpdate(){
    // call only when componenet *status* did change !!
  }

  componentWillUnmount(){

  }

  componentDidCatch(){
    // error JS
  }


  siwtchMode(){
    this.setState({
      darkMode: ! this.state.darkMode
    })
  }


  render(){
    return(
      <div className={ this.state.darkMode == false ?  '' : 'dark-mode'  }>
        

        hell wordk this toggle switch activate dark mode.

        <br/>
        

        <ToggleButton switchFN={this.siwtchMode}  />

      </div>
    );
  }
}



export default App;
