import logo from './logo.svg';
import './App.css';
import Navbar from './compoenents/navbar';
import EmployeeItem from './compoenents/employee';

function App() {

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

      {  /** passed data from parent 'App' to child name EmployeeItem */  }
      
      
      {
        /**
         *       <EmployeeItem fullname="chourabi taher" email="tchourabi@gmail.com" />
      <EmployeeItem fullname="test taher" email="test@gmail.com" />
         */
      }
      
      
      { /** fetch data using map !! */ }

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

export default App;
