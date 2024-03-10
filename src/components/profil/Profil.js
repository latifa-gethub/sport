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
import Erreur from '../Erreur';

export const Profil = () => {
  const objetParams = useParams();
  const idUser = parseInt(objetParams.id);

  const Api = objetParams.api;
  console.log(Api);
  /**appelle api pour recuperer les data */

  const [infoUser, setInfoUser] = useState(null);
  const [callMock, setCallMock] = useState(Api === 'api' ? false : true);
  const [activityUser, setActivityUser] = useState(null);
  const [sessionUser, setSessionUser] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(  
    () => { 
      async function appelleApi() {
        setInfoUser(await getUser(idUser, callMock));
        setActivityUser(await getUserActivity(idUser, callMock));
        setSessionUser(await getUSER_AVERAGE_SESSIONS(idUser, callMock));
        setPerformance(await getUSER_PERFORMANCE(idUser, callMock));
      }
      appelleApi();
    },
    [callMock]
  );
  console.log(infoUser);
  if (
    infoUser === false ||
    infoUser === 'erreur serveur' ||
    activityUser === false ||
    sessionUser === false ||
    performance === false
  ) {
    /* setCallMock(true);   */
    return <Erreur />;
  }
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
