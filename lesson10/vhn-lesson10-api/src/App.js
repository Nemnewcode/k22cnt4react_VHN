
import { useEffect, useState } from 'react';
import './App.css';
import VhnCategorylist from './components/VhnCategorylist';
import axios from './api/VhnApi';
import VhnCategoryform from './components/VhnCategoryform';


function App() {
  //Lấy dữ liệu từ api
  const [vhnCategories,setVhnCategories] = useState([]);

  const getCategories = async () => {
   try {
    const vhnCateRespose = await axios.get("VhnCategory");
    setVhnCategories(vhnCateRespose.data);
   } catch (error) {
    console.log("Lỗi", error);
   }
  }

  useEffect (() => {
    getCategories();
    console.log("vhnCategories: ", vhnCategories);
  }, [])
  //Trạng thái form
  const [vhnCategoryIsForm, setVhnCategoryIsFrom] = useState(false);

  const vhnHandleAddNew = (param) =>{
    setVhnCategoryIsFrom(param);
  }

  const vhnHandleCategoryCloseForm = (param) => {
    setVhnCategoryIsFrom(param);
  }

  return (
    <div className="container border my-3">
      <h1>Vũ Hoài Nam - Call API</h1>

      <VhnCategorylist  renderVhnCategories = {vhnCategories}
                onAddNew={vhnHandleAddNew} />
      <hr/>
      {
        vhnCategoryIsForm ===true?<VhnCategoryform onCloseForm={vhnHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
