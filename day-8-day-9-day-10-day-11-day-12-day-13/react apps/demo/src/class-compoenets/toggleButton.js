import React from "react";

export default class ToggleButton extends React.Component{
    constructor(props){
        super(props);


        console.log(props);
        this.state = {
            active: false,
            switchFN : props.switchFN
        }


        this.toggleSwitch = this.toggleSwitch.bind(this);
    }


    toggleSwitch(){
        this.setState({
            active:  ! this.state.active 
        })

        this.state.switchFN();
    }


    render(){
        return(
            <div onClick={ this.toggleSwitch } className={ this.state.active==true ? 'toggle-button active' : 'toggle-button' } >
                <div className="toggler"></div>
            </div>
        );
    }
}