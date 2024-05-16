import React,{useState} from 'react'

export default function VhnuseState() {
    const [count, setCount] = useState(10);
    //mang
    const [List, setList]=useState([1, 5]);

    //ham xu ly su kien "Them ngau nhien"
    const vhnhandlelist = ()=>{
      //sinh ngau nhien 1 gia tri so
      let num = parseInt(Math.random()*100);
      //cap nhta lai state:"list"
      setList([
                ...List,
        num
     ])
      // cach khac
     //let lst = list.push(num);
      //setList(lst);
    }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click ne
      </button>
      <hr/>
      <h3>List: {List.toString()}</h3>
      <button onClick={vhnhandlelist}>Them ngau nhien</button>
    </div>
  )
}
