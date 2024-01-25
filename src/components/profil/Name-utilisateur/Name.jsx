import React from 'react';
import { getUser } from '../../../data/donner';
  
 export const Name = () => {  
  
  const name= getUser(12);
  console.log("name",name)
    return (
      <div>
          <h1 >Bonjour <span className='name-user'>{name} </span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
          </div>
    )
  }
  
 
