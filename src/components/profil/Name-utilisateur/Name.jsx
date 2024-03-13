import React from 'react';
 
  
 export const Name = (props) => {
  //récupérer info User avec un props 
  const infoUser=props.infoUser
  if(infoUser){ 
      const name=infoUser.userInfos.firstName
    return (
      <div>
          <h1 >Bonjour <span className='name-user'>{name} </span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
        </div>
    )
  }
}
 
