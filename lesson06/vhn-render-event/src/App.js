import React, { Component } from 'react';
import Vhn_Productlist from './components/Vhn_Productlist';
import Vhn_Productadd from './components/Vhn_Productadd';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Vu Hoai Nam', id: 2210900050, status:1},
        {title: 'cabbage', id: 1, status:1},
        {title: 'garlic', id: 2, status:0},
        {title: 'apple', id: 3, status:0},
        {title: 'samsung', id: 4, status:1},
      ]
    }
  }
  vhnhandlesubmit = (param)=>{
    console.log("app:", param);
    //them vao mang du lieu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5 '>
        <h1>Vu Hoai Nam - render data - event from</h1>
        <hr/>
        <Vhn_Productlist renderProducts={this.state.products} />
        <hr/>
        <Vhn_Productadd onsubmit = {this.vhnhandlesubmit} />
      </div>
    );
  }
}

export default App;