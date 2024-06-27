import React from 'react'

export default function VhnListUser({ renderVhnListUser }) {
    console.log("VhnListUser", renderVhnListUser);
    let vhnElementUser = renderVhnListUser.map((vhnUsers, index) => {
        return (
            <>
            <tr>
                <td>{vhnUsers.id}</td>
                <td>{vhnUsers.UserName}</td>
                <td>{vhnUsers.Password}</td>
                <td>{vhnUsers.email}</td>
                <td>{vhnUsers.phone}</td>
                <td>...</td>
                </tr>
            </>
        )
    })
    return (
        <div className='row'>
           <div className='col-md-12'>
           <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {vhnElementUser}
                </tbody>
            </table>
           </div>
        </div>
    )
}
