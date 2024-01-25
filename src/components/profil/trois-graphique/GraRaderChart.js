import React from 'react';
import { ResponsiveContainer,RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,
          Radar,Tooltip} from 'recharts';
import { getUSER_PERFORMANCE } from '../../../data/donner';

export const GraRaderChart = () => {
    const userPerformance=getUSER_PERFORMANCE(12)
    const dataPerformance=userPerformance.data
    console.log("data user performance reçu",dataPerformance)

    const objectKind=userPerformance.kind
      
      const kind=Object.values(objectKind)
    
      let keys=Object.keys(objectKind)
       
      let kindChercher=""
    //function qui nous recupereles element de l axe x
    function valueXaxis(tickItem){
      for(let i=0;i<kind.length;i++){
      
         if(keys[i]==tickItem){
        
          kindChercher=kind[i]
         }
      }
      return kindChercher
    }
  return (
    <div className="contnair-radarChart">
        radar
       <ResponsiveContainer>
        <RadarChart outerRadius={50} width={100} height={100} data={dataPerformance}>
          <PolarGrid />
           <PolarAngleAxis dataKey="kind" tickFormatter={valueXaxis}/> 
             
         
          <Radar            
            dataKey="value"            
            fill="#FF0000"
            fillOpacity={0.6}
          />
           
          
        </RadarChart>
      </ResponsiveContainer>  
    </div>
  );
};
