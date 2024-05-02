import React, { Component } from 'react';

class vhnForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName : "Vu Hoai Nam"
        }
    }

    handleChange = (event)=>{
      this.setState({
        studentName:event.target.value,
      })
    }
    handleSubmit = (ev)=>{
        console.log(ev);
        ev.preventDefault();
    }
    render() {
        return (
            <div>
                 <h2>demo react form - text</h2>
                <form>
                    <lable>student Name: </lable>
                    <input value={this.state.studentName}
                    onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default vhnForm1;