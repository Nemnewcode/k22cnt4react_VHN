import React, { Component } from 'react';

class VHN_eventform4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Nam"
        }
    }

    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Lay du lieu tu props</h2>
                <button onClick={this.handleGetName}>lay ten</button>
                <h2>welcome to, {this.state.name}</h2>
            </div>
        );
    }
}

export default VHN_eventform4;