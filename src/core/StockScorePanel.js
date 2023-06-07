import React from 'react'
import './core.css'
import DonutChart from './DonutChart';

function StockScorePanel(props) {
    // console.log("In panel", props.score)
    
  return (
    <>
    
    <div className='justify-content-center pt-3'>
    <DonutChart score={props.score}/>
    <h1 className='ssp-h1'>{props.name}</h1>
    <p className='ssp-heading'>Expected Annual Sensex Adjusted Returns including Dividends for this StockScore = Dividend score</p>
    </div>
    </>
  )
}

export default StockScorePanel