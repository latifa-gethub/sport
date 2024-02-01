import React from 'react';
import { Name } from './Name-utilisateur/Name';
import { ActivityQuotidien } from './barchart/ActivityQuotidien';
import { GraLineChart } from './trois-graphique/GraLineChart';
import { GraRaderChart } from './trois-graphique/GraRaderChart';
import { GraRadialBarChart } from './trois-graphique/GraRadialBarChart';
import { getUser } from '../../data/donner';
import { getUserActivity } from '../../data/donner';
import { getUSER_AVERAGE_SESSIONS } from '../../data/donner';
import { getUSER_PERFORMANCE } from '../../data/donner';
import { useEffect, useState } from 'react';
import { Valeurs } from './valeurs/Valeurs';
import { useParams } from 'react-router-dom';

export const Profil = () => {
  const objetParams = useParams();
  const idUser = parseInt(objetParams.id);
  /**appelle api pour recuperer les data */ 
  const [infoUser, setInfoUser] = useState(null);
  const [callApi, setCallApi] = useState(false);
  const [activityUser, setActivityUser] = useState(null);
  const [sessionUser, setSessionUser] = useState(null);
  const [performance, setPerformance] = useState(null);
  useEffect(
    () => {
      async function appelleApi() {
       
        setInfoUser(await getUser(idUser, callApi));
        setActivityUser(await getUserActivity(idUser, callApi));
        setSessionUser(await getUSER_AVERAGE_SESSIONS(idUser, callApi));
        setPerformance(await getUSER_PERFORMANCE(idUser, callApi));
        
        if (
          infoUser === null ||
          activityUser === null ||
          sessionUser === null ||
          performance === null
        ) {
          setCallApi(true);
        }
      }
      appelleApi();
    },
    [callApi]
  );

  return (
    <div className="profil">
      <Name infoUser={infoUser} />
      <div className="graphiques-valeurs">
        <div className="tous-graphiques">
          <ActivityQuotidien activityUser={activityUser} />
          <div className="trois-graphiques">
            <GraLineChart sessions={sessionUser} />
            <GraRaderChart performance={performance} />
            <GraRadialBarChart infoUser={infoUser} />
          </div>
        </div>
        <Valeurs infoUser={infoUser} />
      </div>
    </div>
  );
};
