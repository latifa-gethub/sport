import React from 'react';

export const Itemvaleur = props => {
  return (
    <div className='composant-valeur'>
      
      <img className="icon-valeur" src={props.icon} />
      <div className='contnair-valeur'>
         <h3 className='valeur'>{props.valeur}</h3>
         <p className='titre-valeur'>{props.text}</p>
      </div>
    </div>
  );
};
