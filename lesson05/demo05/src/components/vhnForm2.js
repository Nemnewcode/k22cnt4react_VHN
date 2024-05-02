import React, { Component } from 'react';

class vhnForm2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            course:"vhn-HTML5"
        }
    }
    vhnhandleChange = (event)=>{
        this.setState({
           course:event.target.value
        })
    }
    vhnhandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.vhnhandleSubmit}> 
                    <label>Course</label>
                    <select value={this.state.course}>
                        onChange={this.vhnhandleChange}
                        <option value={"vhn-HTML5"}>vhn-HTML5</option>
                        <option value={"vhn-CSS3"}>vhn-CSS3</option>
                        <option value={"vhn-JS"}>vhn-JS</option>
                        <option value={"vhn-RJ"}>vhn-RJ</option>
                    </select>
                    <input type='submit' value={"Submit"} />
                </form>
            </div>
        );
    }
}

export default vhnForm2;