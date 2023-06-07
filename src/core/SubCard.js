import React from 'react'
import './core.css'
import StockScorePanel from './StockScorePanel';
import DonutChart from './DonutChart';
import GeneralInformationPanel from './GeneralInformationPanel';
import SevenScorePanel from './SevenScorePanel';


function SubCard(props) {
    
  return (
    <div className='container-fluid justify-content-center'>
      
      <StockScorePanel name={props.data[0].name} score={props.data[0].stockscrore}/>
      <GeneralInformationPanel/>
      {/* <SevenScorePanel name={props.data[0].name}/> */}

      <h5 className="text-center mb-0 pt-3">StockScore is derived from following Key-Scores.</h5>
      <h5 className="text-center mb-0 pb-3">Click any Score to know its constituents. </h5>

      <DonutChart score={props.data[0].growth} />
      <DonutChart score={props.data[0].cfo_g} />
      <DonutChart score={props.data[0].fcf_g} />
      <DonutChart score={props.data[0].sales_g} />
      <DonutChart score={props.data[0].worth_g} />
      <DonutChart score={props.data[0].yoy_profit} />
      <DonutChart score={props.data[0].yoy_sales} />

    </div>
  )
}

export default SubCard