import React, { Component } from 'react';

class Vhnlistproducts extends Component {
    render() {
        let {renderProducts} = this.props;
        console.log("Products:",renderProducts);

        let elementProduct = renderProducts.map((item,index)=>{
          return(
            <>
             <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                         <td>{item.quantity}</td>
                         <td>{item.price}</td>  
                    </tr>
            </>
          )
        })
        return (
            <div>
                <h2>Danh sách sản phẩm </h2>
                <table className='table table-bordered'>
                   <thead>
                    <tr>
                        <td>Vhn_productID</td>
                        <td>Vhn_productName</td>
                        <td>Vhn_quantity</td>
                        <td>vhn_price</td>
                    </tr>
                   </thead>
                   <tbody>
                   {elementProduct}
                   </tbody>
                </table>
            </div>
        );
    }
}

export default Vhnlistproducts;