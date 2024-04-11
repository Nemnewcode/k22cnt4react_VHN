import './App.css';
import VHN_classcomp from './component/VHN_classcomp';
import VHN_funcdemo from './component/VHN_funcdemo';

function App() {
  // khai báo biến đối tượng 
  const users = {
    username:"k22CNT4",
    password:"123456a@",
    fistname:"Vũ Hoài",
    lastname:"Nam"
  }
  
  // khai báo đối tượng hàm 
  function formatname(user){
    return <h2>Xin chào, {user.fistname} {user.lastname}</h2>
  }
  return (
    <div className="App">
     {/* biểu thức jsx */}
      <div>
        <p>fullname: {users.fistname} {users.lastname} </p>
        {formatname(users)}
      </div>

      {/* sử dụng function component */}
      <div>
        <VHN_funcdemo />
        {/* sử dụng Func_comp có props */}
        <VHN_funcdemo username="VHN" fullname="Vũ Hoài Nam" age="20" />

      </div>

      {/* sử dụng class component */}
      <div>
        {/* dùng không sử dụng props */}
        <VHN_classcomp />
        {/* sử dụng props */}
        <VHN_classcomp company="Fit-NTU - K22CNT4" course="ReactJs" />
      </div>
    </div>
  );
}

export default App;
