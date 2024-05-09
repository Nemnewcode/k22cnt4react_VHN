import React, { Component } from 'react';

class Vhn_Productlist extends Component {
    render() {
        let {renderProducts} = this.props;
        console.log("Products:",renderProducts);

        let elementProduct = renderProducts.map((item,index)=>{
          return(
            <>
             <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                         <td>{item.status===1?'Active':'NonActive'}</td>  
                    </tr>
            </>
          )
        })
        return (
            <div>
                <h2>Danh sach san pham</h2>
                <table className='table table-bordered'>
                   <thead>
                    <tr>
                        <td>ID</td>
                        <td>title</td>
                        <td>status</td>
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

export default Vhn_Productlist;