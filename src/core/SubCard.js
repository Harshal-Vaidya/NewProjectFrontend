import React from 'react'
import './core.css'
import StockScorePanel from './StockScorePanel';
import DonutChart from './DonutChart';
import GeneralInformationPanel from './GeneralInformationPanel';
import SevenScorePanel from './SevenScorePanel';


function SubCard(props) {
    
  return (
    <div className='container-fluid'>
      <div className='row'>
      <StockScorePanel name={props.data[0].name} score={props.data[0].stockscrore}/>
      <SevenScorePanel name={props.data[0].name}/>
      
      </div>
      <div className='row'>
      <GeneralInformationPanel/>
      </div>



    {/* <h1>{scores.scores[0].name}</h1>
    <h1>{scores.scores[0].fcf}</h1>
    <h1>{scores.scores[0].cfo}</h1>
    <h1>{scores.scores[0].profit_ttm}</h1>
    <h1>{scores.scores[0].profit}</h1>
    <h1>{scores.scores[0].sales}</h1> */}
    
    

    
    </div>
  )
}

export default SubCard