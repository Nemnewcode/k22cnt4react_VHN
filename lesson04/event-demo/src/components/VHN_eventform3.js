import React, { Component } from 'react';
 //xu ly su kien voi props, state
class VHN_eventform3 extends Component {
    constructor(props){
        super(props);
        //tao doi tuong du lie thong qua state
        this.state = {
            name:"Vu Hoai Nam",
            job:"Dev soft"
        }
    }

    //ham xu ly su kien 
    handleChangeName = ()=>{
        this.setState({
            name:"K22CNT4-reactjs"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"cong nghe thong tin"
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay doi du lieu trong state </h2>
                <p>Du lieu:{this.state.name} - {this.state.job}</p>
                <button onClick={this.handleChangeName}>thay doi name</button>
                <button onClick={this.handleChangeJob}>Thay doi job</button>
            </div>
        );
    }
}

export default VHN_eventform3;