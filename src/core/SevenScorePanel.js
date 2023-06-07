import React,{useEffect,useState} from 'react'
import './core.css'
import DonutChart from './DonutChart';
import { getSevenScores } from '../admin/helper/adminapicalls';



function SevenScorePanel(props) {

  const [sevenScore, setSevenScore] = useState(null)
  

  useEffect(() => {
    getSevenScores(props.name).then(data => {
      setSevenScore(data)
      console.log("seven score api working here",data);
      }).catch(err => console.log(err));
  }, [props.name]); 

  
 

  
  

  return (
    <>
    <div class="justify-content-center pt-1">
                <h5 className="text-center mb-0">StockScore is derived from following Key-Scores.</h5>
                <h5 className="text-center mb-0">Click any Score to know its constituents. </h5>
                
                {sevenScore &&
                <div className="seven-scores">
                <DonutChart score={sevenScore[0].price } />
                <DonutChart score={sevenScore[0].growth}/>
                <DonutChart score={sevenScore[0].cashflow}/>
                <DonutChart score={sevenScore[0].scale}/>
                <DonutChart score={sevenScore[0].confidence}/>
                <DonutChart score={sevenScore[0].debt}/>
                <DonutChart score={sevenScore[0].profitibility}/>
                </div>}
    </div>            
    </>
  );
}

export default SevenScorePanel