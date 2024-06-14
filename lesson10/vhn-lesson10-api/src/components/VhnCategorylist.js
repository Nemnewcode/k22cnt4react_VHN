import React from 'react'

export default function VhnCategorylist({renderVhnCategories, onAddNew}) {
    console.log("renderVhnCategories: ",  renderVhnCategories);

    let vhnCategoryElement = renderVhnCategories.map((vhnCategory,index) => {
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{vhnCategory.vhnId}</td>
                <td>{vhnCategory.vhnCategoryName}</td>
                <td>{vhnCategory.vhnCategoryStatus===true?"Hiển thị":"Tạm Khóa"}</td>
            </tr>
        )
    })

    const vhnHandleAdd = () =>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sách loại sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {vhnCategoryElement}
                </tbody>

            </table>
            <button className='btn btn-primary' onClick={vhnHandleAdd}>Thêm mới </button>
        </div>
    )
}
