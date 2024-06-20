
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
  const [vhnCategoryEdit, setVhnCategoryEdit] = useState("");
  const vhnHandleAddNew = (param) =>{
    setVhnCategoryIsFrom(param);
  }

  const vhnHandleCategoryCloseForm = (param) => {
    setVhnCategoryIsFrom(param);
  }
  const vhnHandleDelete =(vhnId) => {
    console.log("App-Delete-vhnId:",vhnId);
    //const vhnRespose =  axios.delete('https://666c5a5b49dbc5d7145dbb07.mockapi.io/vhnapi/vhnv1/VhnCategory/${vhnId}');
    const vhnRespose =  axios.delete('VhnCategory/${vhnId}');
    console.log("vhnRespoce - Delete",);
    let vhnDelete = vhnCategories.filter(x=>x.vhnId !== vhnId);
    setVhnCategories (vhnCategories);
    console.log("delete:",);
  }
  const vhnHandleEdit = (vhnCategory) => {
    setVhnCategoryEdit(vhnCategory)
    setVhnCategoryIsFrom(true);
  }
  return (
    <div className="container border my-3">
      <h1>Vũ Hoài Nam - Call API</h1>

      <VhnCategorylist  renderVhnCategories = {vhnCategories}
                onAddNew={vhnHandleAddNew}
                onVhnDelete = {vhnHandleDelete}
                onVhnEdit= {vhnHandleEdit} />
      <hr/>
      {
        vhnCategoryIsForm ===true?<VhnCategoryform 
        renderVhncategory= {vhnCategoryEdit}
        onCloseForm={vhnHandleCategoryCloseForm} />:""
      }
      
    </div>
  );
}

export default App;
