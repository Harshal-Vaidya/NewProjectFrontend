import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';
import './core.css'
import { getColor } from '../admin/helper/adminapicalls';



const DonutChart = (props) => {
  // const [donutColor,setDonutColor] = useState(null)
  const chartRef = useRef(null);
  const [score, setScore] = useState(null)
  const [donotColors, setDonotColors] = useState(null)
  
  useEffect(() => {
    getColor(props.score).then(data => {
      let donutColor = '#'.concat(data[0].code).toUpperCase(); 
      
      
      setScore([props.score,100-props.score])
      setDonotColors([donutColor,'#E0E4DF'])
      
      }).catch(err => console.log(err)); 
      
  },[score,donotColors]);

  useEffect(()=>{
    
    if(score && donotColors)
    {
      drawCanvas()
    }
  },[score,donotColors])

  function drawCanvas(){
    
  const ctx = chartRef.current.getContext('2d');
  ctx.textBaseline = 'middle';
  ctx.clearRect(0, 0, ctx.canvas.width , ctx.canvas.height );
    
    const data = score;
    
    const colors = donotColors;
    
    const totalValue = data.reduce((sum, value) => sum + value, 0);
    const canvasSize = Math.min(ctx.canvas.width, ctx.canvas.height);
    const radius = canvasSize/ 2.5;
    const thickness = radius * 0.4; // Adjust this value to control the thickness

    let startAngle = Math.PI*1.5;
    for (let i = 0; i < data.length; i++) {
      const endAngle = startAngle + (Math.PI * 2 * data[i]) / totalValue;

      ctx.beginPath();
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, startAngle, endAngle);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = colors[i];
      ctx.stroke();
      startAngle = endAngle;
      
    }
    const textX = ctx.canvas.width / 2.1;  // X-coordinate for centered text position
    const textY = ctx.canvas.height / 1.94 ;
    const text = String(score[0]); // Text to display (convert to string if necessary)
    ctx.fillStyle = '#000'; // Set the text color
      ctx.font = '40px Arial'; // Set the font properties
      ctx.textAlign = 'center'; // Center align the text horizontally
    ctx.textBaseline = 'middle';
      ctx.fillText(text, textX, textY); // Draw th
    }

    

  
  

  return( 
    <>
   
    <canvas ref={chartRef} width={100} height={100}></canvas>
    </>
  );
};

export default DonutChart;