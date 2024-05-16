import React, { Component } from 'react';

class Vhnaddproducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            name:'',
            quantity:0,
            price:0,
        }
    }
    vhnhandlechange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    vhnhandlesubmit = (ev)=>{
        ev.preventDefault();

        this.props.onsubmit(this.state);
    }
    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm </h2>
                <form className='conl-md-6'>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                   Vhn_productID
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='Vhn_productID'
                 value={this.state.id}
                 onChange={this.vhnhandlechange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                   Vhn_productName
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='Vhn_productName'
                 value={this.state.title}
                 onChange={this.vhnhandlechange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                   Vhn_quantity
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='Vhn_quantity'
                 value={this.state.status}
                 onChange={this.vhnhandlechange}
                />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon4">
                   Vhn_price
                </span>
                 <input
                 type="text"
                 className="form-control"
                 
                 name='Vhn_price'
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

export default Vhnaddproducts;