import React from 'react';
import { customTooltipRadar } from './customTooltipRadar';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

export const ActivityQuotidien = props => {
  //recupérer les data activity user avec un props   
  const actiivityUser = props.activityUser;

  if (actiivityUser) {
    const dataSessions = actiivityUser.sessions;

    //la function pour récupérer les jours
    function formatXAxis(tickItem) {
      const date = new Date(tickItem); 
      console.log( date.getDate())     
      return date.getDate();
    }

    return (
      <div className="barchart">
        <ResponsiveContainer>
          <h2 className="title-barChart">Activité quotidienne</h2>
          <BarChart
            width={50}
            height={250}
            data={dataSessions}
            barGap={8}
            barSize={7}
          >
            <CartesianGrid strokeDasharray="2 2" vertical={false} />
            <XAxis
              dataKey="day"
              tickFormatter={formatXAxis}
              height={40}
              allowDecimals={false}
              tickMargin={20}
              tick={{ fill: '#9B9EAC' }}
            />
            <YAxis orientation="right" tickCount={3} />
            <Tooltip
              payload={[{ dataSessions }]}
              content={customTooltipRadar}
            />
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
  }
};
