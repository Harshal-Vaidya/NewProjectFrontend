import React, { useState,useEffect } from 'react'
import Card from './Card'
import { getData,getCompanyByCode } from '../admin/helper/adminapicalls';
import './core.css'





function Base() {
    const [company, setCompany] = useState([]);
    const [error, setError] = useState(false);
    const [inputCardList, setInputCardList] = useState([]);
    const [err, seterr] = useState(null)

    

  // const newCard  =(<div class="col">
  // {inputCardList}
  // </div>);

      

  const handleChange = () => {
   setInputCardList(inputCardList.concat(<div class="col"><Card key={inputCardList.length} onAddBtnClick={()=>handleChange}/></div>));
  };
  return (
    <>
    <div class='container-fluid'>
    
      <div className='row'>
          <div class="col">
            <Card />
          </div>
          <div class="col">
            <Card />
          </div>
          {inputCardList}
      </div>  
      </div>
    <div>
        <button type="button" onClick={handleChange} class="btn btn-outline-success button-core mb-2"> + Add Company to compare</button>
    </div>
    
    <h4>{err}</h4>
    </>
  )
}

export default Base