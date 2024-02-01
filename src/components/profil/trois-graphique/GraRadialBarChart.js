import React from 'react';
 
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList   
} from 'recharts';
import { CustomizedLabel } from './CustomizedLabel';

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
      <div className='text-objectif'><span className='pourcentage'>12%</span><span className='objectif'>de votre objectif</span></div>
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
        {/*  <RadialBarChart
          width={100}
          height={250}
          innerRadius="50"
          outerRadius="60"
          data={data}
          startAngle={210}
          endAngle={210 - recupScore / 100 * 360}
          fill="#FF0000"
        >
          <RadialBar
            minAngle={15}
            label={{ fill: 'white', position: 'relative' }}
            background
            clockWise={true}
            dataKey="score"
          />

          <RadialBar
            minAngle={15}
            label={{
              fill: '#282D30',
              position: 'relative',
              background: 'green'
            }}
            background
            clockWise={true}
            dataKey="score"
            showLabels={true}
            labelsStyle={{
              fill: 'red',
              dominantBaseline: 'middle',
              textAnchor: 'middle'
            }}
          />
           <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="left"
          />    
        </RadialBarChart> */}
      </ResponsiveContainer>
    </div>
  );}
};
