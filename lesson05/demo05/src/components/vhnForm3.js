import React, { Component } from 'react';

class vhnForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Vu Hoai Nam",
            age:"20",
            course:"vhn-HTML5",
            gender:true
        }
    }

    vhnhandleChange = (event)=> {
         let Name=event.target.Name;
         let value=event.target.value;
         this.setState({
            [name]:value
         })
    }
    vhnhandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props,onsubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                <lable>student Name: </lable>
                    <input name='studentName'
                     value={this.state.studentName}
                     onChange={this.vhnhandleChange}/>
                    </div>
                    <div>
                    <lable>age: </lable>
                    <input name='age'
                    value={this.state.age}
                    onChange={this.vhnhandleChange}/>
                    </div>
                    <div>
                    <lable>gender: </lable>
                    <input type='radio' name='gender'   
                     value={true} checked={this.state.gender===true?'checker':''}/> Nam
                    <input type='radio' name='gender'  
                    value={false} checked={this.state.gender===false?'checker':''}/> Nu
                    </div>
                    <div>
                    <label>Course:</label>
                    <select name='course'
                    value={this.state.course}>
                        onChange={this.vhnhandleChange}
                        <option value={"vhn-HTML5"}>vhn-HTML5</option>
                        <option value={"vhn-CSS3"}>vhn-CSS3</option>
                        <option value={"vhn-JS"}>vhn-JS</option>
                        <option value={"vhn-RJ"}>vhn-RJ</option>
                    </select>
                    </div>
                    <button onClick={this.vhnhandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default vhnForm3;