import React from 'react';

export default function Func_JSX_VuHoaiNam(props) {
     const users = {
        name:"Vu Hoai Nam",
        age:20
     }
    return (
        <div>
            <h2>Function component  Demo</h2>
            <h3>
                welcome to, {users.name} - {users.age}
            </h3>
             <hr/>
             <h3>
                Props:
                <br/> fullname: {props.fullname}
                <br/> age: {props.age}
             </h3>
        </div>
    );
}
