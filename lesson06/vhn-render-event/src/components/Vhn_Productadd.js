import React, { Component } from 'react';

class Vhn_Productadd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0
        }
    }
    vhnhandlechange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    //submit form
    vhnhandlesubmit = (ev)=>{
        ev.preventDefault();

        this.props.onsubmit(this.state);
    }
    render() {
        return (
            <div>
                <h2>Them moi san pham</h2>
                <form className='conl-md-6'>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                   ID
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='id'
                 value={this.state.id}
                 onChange={this.vhnhandlechange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                   title
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='title'
                 value={this.state.title}
                 onChange={this.vhnhandlechange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                   status
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='status'
                 value={this.state.status}
                 onChange={this.vhnhandlechange}
                />
              </div>
                  <button className='btn btn-success' onClick={this.vhnhandlesubmit}>Ghi lai</button>
                </form>
            </div>
        );
    }
}

export default Vhn_Productadd;