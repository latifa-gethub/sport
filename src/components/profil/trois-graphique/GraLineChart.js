import React from 'react';

import { costomTooltip } from './costomTooltip';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  ReferenceDot
} from 'recharts';

export const GraLineChart = (props) => {

  const dataSessions = props.sessions;
if(dataSessions){
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
   
  return (
    <div className="contnair-line-chart">
      <h2 className="title-lineChart">Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart
           width={100} height={100}
          data={dataSessions}
          margin={{ top: 1, right: 2, left: 4, bottom: 45 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
            padding={{ left: 5 }}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          />

          <YAxis width={0} />
          <Tooltip
            payload={[{ dataSessions }]}         
             
            content={costomTooltip}
          />
          <defs>
            <linearGradient id="Gradient01">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="30%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <rect fill="url(Gradient01)" x="10" y="10" width="100" height="100" />
          <ReferenceDot label="sessionLength" />
          {
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#ffffff"
              height={20}
              dot={false}
              legendType="diamond"
            />
          }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );}
};
