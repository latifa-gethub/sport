import React from 'react';

export const customTooltipRadar = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="info-bulle-barchart">
        <p>
          {payload[0].value}kg
        </p>
        <p>
          {payload[1].value}Kcal
        </p>
      </div>
    );
  }
};
