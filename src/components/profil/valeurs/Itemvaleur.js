import React from 'react';
//composant pour les cards
export const Itemvaleur = props => {
  return (
    <div className="composant-valeur">
      <img className="icon-valeur" src={props.icon} alt="icon valeur" />
      <div className="contnair-valeur">
        <h3 className="valeur">
          {props.valeur}
        </h3>
        <p className="titre-valeur">
          {props.text}
        </p>
      </div>
    </div>
  );
};
