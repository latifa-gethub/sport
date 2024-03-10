import React from 'react'
import { Itemvaleur } from './Itemvaleur'
import { getKeyData } from '../../../data/donner'
 

export const Valeurs = (props) => {
  const infoUser=props.infoUser
  if(infoUser){
    
    const keyData=infoUser.keyData;
 
/* const tabKeyData=Object.values(keyData)*/
 
const calories=keyData.calorieCount.toLocaleString("en-IN") 
 
const protein=keyData.proteinCount
const Glucides=keyData.carbohydrateCount
const Lipides=keyData.lipidCount
 
  return (
    <div className='composants-valeurs'> 
        <Itemvaleur valeur={`${calories} kCal`} text="Calories" icon="../../assets/calories-icon.svg" />
        <Itemvaleur valeur={`${protein} g`} text="Proteines" icon="../../assets/protein-icon.svg" />
        <Itemvaleur valeur={`${Glucides} g`} text="Glucides" icon="../../assets/carbs-icon.svg" />
        <Itemvaleur valeur={`${Lipides} g`} text="Lipides" icon="../../assets/fat-icon.svg" />
            
      
    </div>
  )}
}
