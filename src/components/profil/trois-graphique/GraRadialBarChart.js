import React from 'react';
import { getScore } from '../../../data/donner';
import { ResponsiveContainer, RadialBarChart, RadialBar,Legend,Tooltip ,PolarAngleAxis} from 'recharts';

export const GraRadialBarChart = () => {
  const infoUser = getScore(12);
 
  const data=[{
    "score":infoUser.todayScore*100,
    

  }]
  const recupScore=Object.values(data[0])[0]
  console.log("mes data",data[0])
  console.log("mes score",recupScore)
  /* const score=data */ 
  return (
    <div className='contnair-radialbarchart'>
      <h3 className='title-radialbarchart'>Score</h3>
      <ResponsiveContainer>
        <RadialBarChart
           width={730} 
           height={250} 
          innerRadius="50"
          outerRadius="60"
          data={data}
          startAngle={210}
          endAngle={210-(recupScore/100)*360}
          fill="#FF0000" 
          
        
        >
      

          <RadialBar
            minAngle={15}
            label={{ fill: '#282D30', position: 'relative' ,background:'green' }}
            background 
            clockWise={true}
            dataKey='score'
            showLabels={true}
            labelsStyle={{
                fill: "red",
                dominantBaseline:"middle",
                textAnchor:"middle"
            }}
          />
          {/* <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="left"
          />   */}
          
        </RadialBarChart>
      </ResponsiveContainer>
     
    </div>
  );
};
