import React from 'react'

export default function VHN_eventform2() {

    //dinh nghia cac ham xu ly su kien
    const eventHandleclick1 = (content)=>{
        console.log('==========================');
        console.log(content);
        console.log('==========================');
    }
  return (
    <div className='alert alert-succes'>
      <h2>event demo - function Component</h2>
      <button onClick={eventHandleclick1("Vu Hoai Nam")}>goi khi render</button>
      <button onClick={()=>eventHandleclick1("k22CNT4-reactjs")}>goi khi click</button>
    </div>
  )
}
