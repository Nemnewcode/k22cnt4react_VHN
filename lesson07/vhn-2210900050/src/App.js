import React, { Component } from 'react';
import Vhnlistproducts from './components/Vhnlistproducts';
import Vhnaddproducts from './components/Vhnaddproducts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Vhn_products : [
        {name: 'Vu Hoai Nam', id: 2210900050, quantity: 15, price:1000},
        {name: 'IPhone 12', id: 2, quantity: 20, price:1250},
        {name: 'IPhone 13', id: 3, quantity: 10, price:1500},
      ]
    }
  }
  vhnhandlesubmit = (param)=>{
    console.log("app:", param);
    let {Vhn_products} = this.state;
    Vhn_products.push(param);
    this.setState({
      Vhn_products:Vhn_products
    })
  }
  render() {
    return (
      <div className='div div-react'>
        <h1>Vũ Hoài Nam - kiểm tra - react</h1>
        <hr/>
        < Vhnlistproducts renderProducts={this.state.Vhn_products} />
        <Vhnaddproducts onsubmit = {this.vhnhandlesubmit} />
      </div>
    );
  }
}

export default App;