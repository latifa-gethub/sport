import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigateHorizontal } from './header/NavigateHorizontal';
import { NavigateVertical } from './NavigateVertical';

export const Accueil = () => {
  //initialiser l'état de choix et la mettre à jour en fonction de notre choix
  const [choix, setChoix] = useState('api');
  
  return (
    <div className="accueil">
      <NavigateHorizontal />
      <div className="navigateVertical-choixUser">
        <NavigateVertical />
        <div className="choix-user">
          <h2>Choix des données avec:</h2>
          <div className="choix-donner">
            <div>
              <input
                name="choix1"
                type="checkbox"
                onClick={() => {
                  setChoix('api');
                }}
              />
              <label htmlFor="choix1"> Une appelle API</label>
            </div>
            <div>
              <input
                name="choix2"
                type="checkbox"
                onClick={() => {
                  setChoix('mock');
                }}
              />
              <label htmlFor="choix2">Un mock des données de l'API </label>
            </div>
          </div>
          <h2>les performances de quel utilisateur ?</h2>
          <div className="users">
            <Link className="user1" to={`/profil/12/${choix}`}>
              Karl
            </Link>
            <Link className="user2" to={`/profil/18/${choix}`}>
              Cecilia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
