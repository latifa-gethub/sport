import React from 'react';

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Label
} from 'recharts';
import { getUserActivity } from '../../../data/donner';

export const ActivityQuotidien = () => {
  const dataUserActivity = getUserActivity(12);
  
  const dataSessions = dataUserActivity.sessions;
  
  //la function pour recuperer juste le jour

  function formatXAxis(tickItem) {
    const date = new Date(tickItem);

    return date.getDate();
  }
  console.log('le jour est', formatXAxis());
  return (
    <div className="barchart">

      <ResponsiveContainer>
      <h2 className="title-barChart">Activité quotidienne</h2>
        <BarChart width={720} height={250} data={dataSessions} barGap={8} barSize={7} >
         
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
           height={40}
           allowDecimals={false}
           tickMargin={20}
          />
          <YAxis orientation="right"  tickCount={3} />
          <Tooltip />
          <Legend
            width={360}
            align="right"
            iconSize={7}
            iconType="circle"
            color="black"
            verticalAlign="top"
          />
          <Bar
            dataKey="kilogram"
            maxBarSize={10}
            radius={[5, 5, 0, 0]}
            fill="black"
          />
          <Bar
            dataKey="calories"
            maxBarSize={10}
            radius={[20, 20, 0, 0]}
            fill="#FF0000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
