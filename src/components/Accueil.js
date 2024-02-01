import React from 'react'
import { Link } from 'react-router-dom'

export const Accueil = () => {
  return (
    <div className='accueil'> 
        <h1>Quel est le user ?</h1>
        <div className='users'>
            <Link to={'/profil/12'}>Karl</Link>
           <Link  to={'/profil/18'}>Cecilia</Link>
        </div>
        
    </div>
  )
}
