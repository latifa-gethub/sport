import React from 'react';
import { Name } from './Name-utilisateur/Name';
import { ActivityQuotidien } from './barchart/ActivityQuotidien';
import { GraLineChart } from './trois-graphique/GraLineChart';
import { GraRaderChart } from './trois-graphique/GraRaderChart';
import { GraRadialBarChart } from './trois-graphique/GraRadialBarChart';
import { getUser } from '../../data/donner';
import {getUserActivity} from '../../data/donner';
import { getUSER_AVERAGE_SESSIONS } from '../../data/donner';
import { getUSER_PERFORMANCE } from '../../data/donner';
import { useEffect,useState } from 'react';
import { Valeurs } from './valeurs/Valeurs';
export const Profil = () => {  
 /**appelle api pour recuperer nameUser */ 

 const [infoUser,setInfoUser]=useState(null)
  useEffect(()=>{      
     async function appelleApi(){      
      setInfoUser(await getUser(12))
     }
  appelleApi()
  },
  []
  ) 
  
 
 
  /**appelle api pr recuperer activity */
  const [activityUser,setActivityUser]=useState(null)
  useEffect(()=>{      
     async function appelleApi1(){  
         
      setActivityUser(await getUserActivity(12))
     }
  appelleApi1()
  },
  []
  )  
  /**appelle api pour recuperer sessions */ 

 const [sessionUser,setSessionUser]=useState(null)
 useEffect(()=>{      
    async function appelleApi(){      
     setSessionUser(await getUSER_AVERAGE_SESSIONS(12))
    }
 appelleApi()
 },
 []
 )  
 /**appelle api pour recuperer performances */ 

 const [performance,setPerformance]=useState(null)
  useEffect(()=>{      
     async function appelleApi(){      
      setPerformance(await getUSER_PERFORMANCE(12))
     }
  appelleApi()
  },
  []
  )  
  return (
    <div className="profil">
      <Name infoUser={infoUser} />
      <div className="graphiques-valeurs">
        <div className="tous-graphiques">
          <ActivityQuotidien activityUser={activityUser}/>
          <div className="trois-graphiques">
            <GraLineChart sessions={sessionUser}/>
            <GraRaderChart performance={performance}/>
            <GraRadialBarChart infoUser={infoUser} />
          </div>
        </div>
        <Valeurs infoUser={infoUser} />
      </div>
    </div>
  );
};
