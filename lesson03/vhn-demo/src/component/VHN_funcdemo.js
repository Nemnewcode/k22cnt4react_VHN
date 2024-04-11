import React from 'react'

export default function VHN_funcdemo(props) {
  return (
    <div>
      <hr/>
      <h2>Function component demo</h2>
      <h3>Sử dụng thuộc tính từ props</h3>
      <p>username: {props.username}</p>
      <p>fullname: {props.fullname}</p>
      <p>age: {props.age}</p>
    </div>
  )
}
