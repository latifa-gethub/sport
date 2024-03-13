import React from 'react';

export const costomTooltip = ({ active, payload }) => {
  if (active && payload) {
    
    return (
      <div className="info-bulle">
        <h3>
          {payload[0].value}min
        </h3>
      </div>
    );
  }
};
