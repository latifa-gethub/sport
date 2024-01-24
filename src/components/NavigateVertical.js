import React from 'react';
/* import { FaPersonBooth,FaCartShopping } from 'react-icons/fa'; */

export const NavigateVertical = () => {
  return (
    <div className="navigate-vertical">
      <div className="tous-icons">
        <img
          src="../assets/icon-yoga.svg"
          className="icon-person"
          alt="icon-yoga"
        />
        <img src="../assets/icon-swimming.svg" alt="icon-swimmig" />
        <img
          src="../assets/icon-biking.svg"
          className="icon-person"
          alt="icon-biking"
        />
        <img src="../assets/icon-sport.svg" className="icon-sport.svg" />
      </div>
      <p className='text-copityght'>Copiryght, SportSee 2020</p>
    </div>
  );
};
