import React from 'react'
import { get } from '../../../data/donner'

export const Name = () => {
  const name=get(12)

 
  if(name){
    return (
      <div>
          <h1>Bonjour {name} </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
          </div>
    )
  }
  
}
