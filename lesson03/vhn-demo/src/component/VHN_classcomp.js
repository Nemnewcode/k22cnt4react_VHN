import React, { Component } from 'react';

class VHN_classcomp extends Component {
    constructor(props){
        super(props);
        // tạo đối tượng dữ liệu
        this.state = {
            firsname:"Vũ",
            lastname:"Nam",
            username:"k22CNT4"
        }
    }

    //arrow function
    member = (props)=>{
        return(
          <div classname='alert alert-success'>
             <h3>xin chào: {props.fullname} - Bạn đã {this.props.age} tuổi.</h3>
          </div>
        );
    }

    listmember = ()=>{
        return (
            <>
             <this.member fullname="nguyen Van A" age="20" />
             <this.member fullname="nguyen Van b" age="21" />
             <this.member fullname="nguyen Van c" age="22" />
             <this.member fullname="nguyen Van d" age="23" />
            </>
        )
    }
    render() {
        return (
            <div classname='alert alert-danger'>
                <h2>class component demo</h2>
                <hr/>
                <h3>dữ liệu trong state</h3>
                <h4>Xin chào: {this.state.firsname} {this.state.lastname}</h4>
                <hr/>
                <h3> dữ liệu từ props </h3>
                <p>company: {this.props.company}</p>
                <p>course: {this.props.course}</p>

                <hr/>
                <this.member fullname="Vũ Hoài Nam" age="20" />
                <hr/>
                 <this.listmember />
            </div>
        );
    }
}

export default VHN_classcomp;