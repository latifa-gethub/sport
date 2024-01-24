import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import { Encour } from './Encour';
import { Profil } from './profil/Profil';

const router = () => {
  return (  
  <BrowserRouter>
   <Routes>
     <Route path='/*' element={Encour}/>
     <Route path='/' element={Encour}/> 
     <Route path='/profil' element={Profil}/> 
   </Routes>
  </BrowserRouter>)
};

export default router;
