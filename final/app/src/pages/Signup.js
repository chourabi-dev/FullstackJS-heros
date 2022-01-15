import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
        fullname:"",
        username:'',
        password:'',
        errorMsg:'',
        successMsg:''
    }
  }


  connect(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"fullname":this.state.fullname ,"username":this.state.username,"password":this.state.password});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/api/signup", requestOptions)
      .then(response => response.json())
      .then(result =>{
          if (result.success === true ) {
              this.setState({
                  successMsg:result.message
              })
          }else{
                this.setState({
                    errorMsg:result.message
                })
          }
      })
      .catch(error =>{
        this.setState({
            errorMsg:'Something went wrong, please try again.'
        })
      });
  }



  render(){
    return(
<div>

<div className="container">


    <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">

                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create your account</h1>
                                </div>
                                <form className="user" onSubmit={(e)=>{
                                    e.preventDefault();

                                    this.connect();

                                }}>
                                    <div className="form-group">
                                        <input onChange={ (e)=>{ this.setState({fullname:e.target.value}) } }  type="text" className="form-control form-control-user" placeholder="fullname" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={ (e)=>{ this.setState({username:e.target.value}) } } type="text" className="form-control form-control-user" placeholder="username" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={ (e)=>{ this.setState({password:e.target.value}) } } type="password" className="form-control form-control-user" placeholder="password" />
                                    </div>
                                    

                                    <button  disabled={ this.state.fullname === '' || this.state.username==='' || this.state.password==='' }  type="submit" className="btn btn-primary btn-user btn-block">
                                        create account
                                    </button>


                                    {
                                        this.state.successMsg !=='' ?
                                        <div className="alert alert-success">
                                            { this.state.successMsg }
                                        </div>
                                        :
                                        <div></div>
                                    }

                                    {
                                        this.state.errorMsg !=='' ?
                                        <div className="alert alert-danger">
                                            { this.state.errorMsg }
                                        </div>
                                        :
                                        <div></div>
                                    }

                                </form>

                                <div className="text-center">
                                    <Link className="small" to={"/auth"} >back to signin</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

</div>
    );
  }
}

export default Signup;
