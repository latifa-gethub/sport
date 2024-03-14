import React from 'react';
 
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList   
} from 'recharts'; 

export const GraRadialBarChart = (props) => {
  const infoUser = props.infoUser
  if(infoUser){   
    let score
    if(infoUser.todayScore===undefined){
      score=infoUser.score
    }else{
      score=infoUser.todayScore
    }
  const data = [
    {
      score: score * 100      
    }
  ];
  const recupScore = Object.values(data[0])[0];  
  
  return (
    <div className="contnair-radialbarchart">
      <h3 className="title-radialbarchart">Score</h3>
      <div className='text-objectif'><span className='pourcentage'>{recupScore}% </span><span className='objectif'>de votre objectif</span></div>
      <ResponsiveContainer>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="score"           
            cx="50%"
            cy="30%"
            outerRadius={50}
            fill="#fff"
          >
            <LabelList dataKey="score" position="center" fill='#fff'/>
          </Pie>
          <Pie
            data={data}
            dataKey="score"
            cx="50%"
            cy="30%"
            startAngle={210}
            endAngle={210 - recupScore / 100 * 360}
            innerRadius={50}
            outerRadius={65}
            fill="#E60000"
            cornerRadius={10}            
         />          
         
        </PieChart>       
      </ResponsiveContainer>
    </div>
  );}
};
