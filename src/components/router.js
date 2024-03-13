import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from '../App';
import Erreur from './Erreur';
import { Accueil } from './Accueil';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil/:id/:api" element={<App />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
