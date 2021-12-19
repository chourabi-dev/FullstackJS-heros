import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import React from 'react';
 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



class ServerCall extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        isLoading: true,
        catchedErr: false,
        data:null
    }
  }


  componentDidMount(){
      // call server
      this.initData();
  }


  initData(){
    /**
     * Loading
     * get data
     * 
     * succ  err
     */

    this.setState({
        isLoading: true,
        catchedErr: false,
        data:null
    })

    // call to server !!
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.setState({data:result})
        })
        .catch(error =>{
            this.setState({
                catchedErr:true
            })
        }).finally(()=>{
            this.setState({
                isLoading:false
            })
        })
  }



  render(){
    return(
      <div>
         
         {
             this.state.isLoading === true ? 
             <div className="loader">
                <LinearProgress />
            </div>
            :<div></div>
                
         }
         
         {
             this.state.catchedErr === true ? 
             <div className="container" >
                <div className="row">
                    <div className="col-sm-6 m-auto mt-5 error-box">
                        :( <br/>
                        <p>Something went wrong , please try again.</p>
                        <Button onClick={ ()=>{ this.initData(); } } >Try again</Button>

                    </div>
                </div>
                
            </div>
            :<div></div>
                
         }


        

        {
             this.state.data !== null ? 
             <div className="container content">
                <List>
                    {
                        this.state.data.map((e)=>{
                            return (
                                <ListItem disablePadding>
                                <ListItemButton>
                                
                                <ListItemText primary={ e.title } secondary={ e.body } />
                                </ListItemButton>
                            </ListItem> 
                            
                            );
                        }
                        
                        )
                    }    
                </List>


                </div>
            :<div></div>
                
         }
        

      </div>
    );
  }
}

export default ServerCall;
