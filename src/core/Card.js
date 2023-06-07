import React, { useState } from 'react'
import SubCard from './SubCard';
import { getData, getStockByName } from '../admin/helper/adminapicalls';





function Card() {
    const [companyCode, setCompanyCode] = useState(null);
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

    const handleSubmit = (name)=>{
      
        // event.preventDefault();
        
        setCompanyCode(name)
        
        getData(name).then(data => {
          console.log("Data from getData API",data)
              setDisplay(<SubCard data={data}/>);
            }).catch(err => console.log(err));
        setdropList(null)  
        console.log(display)
           
          
    }

    
    
  return (
    <div >
        <div >
        {/* onSubmit={handleSubmit} */}
        <form>
        <div class="input-group mt-2">
        <input type="text" 
        value={companyCode}
        onChange={(e) => onInputEntry(e.target.value)}
        class="form-control" placeholder="Search Company" aria-label="Company name" aria-describedby="basic-addon2"/>
        
        
        </div>
        <div className="dropdown">
        <ul className="px-0 my-0">
          { dropList && dropList.map((item)=><li onClick={()=>handleSubmit(item.name)}>{item.name}</li>)}
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