import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from 'recharts';

export const GraRaderChart = props => {
  //récupérer les data usePerformance avec un props
  const userPerformance = props.performance;

  if (userPerformance) {
    const dataPerformance = userPerformance.data;
    const objectKind = userPerformance.kind;
    const kind = Object.values(objectKind);
    let keys = Object.keys(objectKind);

    let kindChercher = '';
    //function qui nous recupere les element de l'axe x
    function valueXaxis(tickItem) {
      for (let i = 0; i < kind.length; i++) {
        if (keys[i] == tickItem) {

          kindChercher = kind[i];
        }
      }
      return kindChercher;
    }
    
    return (
      <div className="contnair-radarChart">
      
        <ResponsiveContainer>
          <RadarChart
            outerRadius={50}
            width={100}
            height={100}
            data={dataPerformance}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={valueXaxis}
              tick={{ fill: 'white', fontSize: 11 }}
            />
            <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
};
