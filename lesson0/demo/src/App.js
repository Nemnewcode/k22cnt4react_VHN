import logo from './logo.svg';
import './App.css';
import Func_JSX_VuHoaiNam from './components/Func_JSX_VuHoaiNam';
function App() {
  return (
    <section className="App">
      <h1>demo JSX</h1>  
     {/* function component demo */}
     <Func_JSX_VuHoaiNam />
     <Func_JSX_VuHoaiNam fullname="Vu Hoai Nam" age="20" />

     <class_VuHoaiNam />
     <hr/>
     <class_VuHoaiNam infor="Hoc reactJS" time="11" />
    </section>
  );
}

export default App;
