import React, { Component } from 'react';

class class_VuHoaiNam extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"Vu Hoai Nam",
            class:"k22cnt4"
        }
    }
    users = {
        name:"Vu Hoai Nam",
        age:20
    }
    //ham xu ly
    handlechange = (event)=>{
        this.setState({
          fullname:"Vu Hoai Nem"
        })
    }
    render() {
        return (
            <div>
                <h2>class component demo</h2>
                {this.users.name} - {this.users.age}
                <hr/>
                <h3>info:{this.props.info}</h3>
                <h3>time:{this.props.time}</h3>
                <hr/>
                <h3>state:
                    fullname: {this.state.fullname} -
                    class: {this.state.class} 
                </h3>
                <button oneclick={this.handlechange}>change name</button>
            </div>
        );
    }
}

export default class_VuHoaiNam;