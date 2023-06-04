import React, { useState } from 'react'
import SubCard from './SubCard';
import { getCompanyByCode, getStockByName } from '../admin/helper/adminapicalls';





function Card() {
    const [companyCode, setCompanyCode] = useState("");
    const [error, setError] = useState(null)
    const [display, setDisplay] = useState("");
    const [dropList, setdropList] = useState(null)
        
    const getSearchRes =()=>{
      console.log("DROP LIST UPDATED")
      console.log("Printing drop list",dropList)
    }  

    const onInputEntry = (companyCode)=>{
        setCompanyCode(companyCode);
        getStockByName(companyCode).then(data => {
            console.log(data);
            setdropList(data);
            getSearchRes();
            }).catch(err => console.log(err));
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setCompanyCode(event.target.value)
        getCompanyByCode(companyCode).then(data => {
          console.log(data)
              setDisplay(<SubCard data={data}/>);
            }).catch(err => console.log(err));
        setdropList(null)    
    }

    
    
  return (
    <div >
        <div >
        <form onSubmit={handleSubmit}>
        <div class="input-group mt-2">
        <input type="text" 
        value={companyCode}
        onChange={(e) => onInputEntry(e.target.value)}
        class="form-control" placeholder="Search Company" aria-label="Company name" aria-describedby="basic-addon2"/>
        <input class="input-group-text" id="basic-addon2" type="submit" />
        
        </div>
        <div className="dropdown">
        <ul className="px-0 my-0">
          { dropList && dropList.map((item)=><li onClick={()=>{setCompanyCode(item.name)}}>{item.name}</li>)}
        </ul>
        </div>
        </form>
        <div>
          
           {display}
          
         </div>
</div>
</div>
  );
}

export default Card