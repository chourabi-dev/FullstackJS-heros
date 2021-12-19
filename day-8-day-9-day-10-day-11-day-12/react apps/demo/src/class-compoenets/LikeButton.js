import React from "react";
class LikeButton extends React.Component{

    constructor(props){
        
        super(props);


        this.state = {  // State 0
            likes: 5,
            didLike: false
        };
    }
    likeFunction(){
        this.setState({
            didLike: ! this.state.didLike,
            likes:  this.state.didLike == false ? (this.state.likes+1) : (this.state.likes-1) 
        });
    }
    render(){
        return(
            <button  onClick={ ()=>{
                this.likeFunction();

            } }  > {this.state.likes} { this.state.didLike ? 'Dislike' : 'Like' } </button>
        );
    }
}


export default LikeButton;