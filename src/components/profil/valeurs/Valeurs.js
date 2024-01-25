import React from 'react'
import { Itemvaleur } from './Itemvaleur'
import { getKeyData } from '../../../data/donner'
 

export const Valeurs = () => {
const keyData=getKeyData(12)
console.log("key data",keyData)
const tabKeyData=Object.values(keyData)
console.log("tab key data",tabKeyData)
const calories=tabKeyData[0].toLocaleString("en-IN")
 
const protein=tabKeyData[1]
const Glucides=tabKeyData[2] 
const Lipides=tabKeyData[3]
console.log("glusides",Glucides)
  return (
    <div className='composants-valeurs'> 
        <Itemvaleur valeur={`${calories} kCal`} text="Calories" icon="../assets/calories-icon.svg" />
        <Itemvaleur valeur={`${protein} g`} text="Proteines" icon="../assets/protein-icon.svg" />
        <Itemvaleur valeur={`${Glucides} g`} text="Glucides" icon="../assets/carbs-icon.svg" />
        <Itemvaleur valeur={`${Lipides} g`} text="Lipides" icon="../assets/fat-icon.svg" />
            
      
    </div>
  )
}
