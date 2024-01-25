import React from 'react';
import { getUSER_AVERAGE_SESSIONS } from '../../../data/donner';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ReferenceDot,
  Label
} from 'recharts';

export const GraLineChart = () => {
  const dataSessions = getUSER_AVERAGE_SESSIONS(12);
  console.log('les jour et durées sessions', dataSessions);
  //function pour recuperer les jour
  function formatXAxis(tickItem) {
    const nbSemaine = [1, 2, 3, 4, 5, 6, 7];
    const nameSemaine = ['  L', 'M', 'M', 'J', 'V', 'S', 'D'];
    let jour;
    for (let i = 0; i < nbSemaine.length; i++) {
      if (tickItem === nbSemaine[i]) {
        jour = nameSemaine[i];
      }
    }
    return jour;
  }
  const divStyle = {
  
  backgroundColor:'red',
   
  };
  
  return (
    <div className="contnair-line-chart">
      <h2 className="title-lineChart">Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart
          width={100}
          height={250}
          data={dataSessions}
          margin={{ top: 5, right: 2, left: 4, bottom: 5 }}
        >
       
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey="day" tickFormatter={formatXAxis}  padding={{ left:5}} axisLine={false} tickLine={false}  />
          
          <YAxis width={0} />
          <Tooltip payload={[{ name: '05-01', value: 12, unit: 'kg' }]} cursor={false} labelStyle={divStyle}  />
 <ReferenceDot ifOverflow='visible'/>
          {
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#ffffff"
             height={20}
              dot={false}
               
              
            />
          }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
