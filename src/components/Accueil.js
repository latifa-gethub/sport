import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigateHorizontal } from './header/NavigateHorizontal';
import { NavigateVertical } from './NavigateVertical';

export const Accueil = () => {
  const [choix, setChoix] = useState('api');
  return (
    <div className="accueil">
      <NavigateHorizontal />
      <div className='navigateVertical-choixUser'>
         <NavigateVertical />
      <div className='choix-user'>
        <h2>Choix des données avec:</h2>
        <div className='choix-donner'>
        <input
        name='choix1'
        type='checkbox'
          onClick={() => {
            setChoix('api');
          }}
        />
         <label htmlFor='choix1'> Une appelle API</label>
         
        <input
        name='choix2'
        type='checkbox'
          onClick={() => {
            setChoix('mock');
          }}
        />
        <label htmlFor='choix2'>Un mock des données </label>  
         
        </div>        
        <h2>les performances de quel utilisateur ?</h2>
        <div className="users">
          <Link to={`/profil/12/${choix}`}>Karl</Link>
          <Link to={`/profil/18/${choix}`}>Cecilia</Link>
        </div>
      </div>
      </div>
     
    </div>
  );
};
