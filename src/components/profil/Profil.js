import React from 'react';
import { Name } from './Name-utilisateur/Name';
import { ActivityQuotidien } from './barchart/ActivityQuotidien';
import { GraLineChart } from './trois-graphique/GraLineChart';
import { GraRaderChart } from './trois-graphique/GraRaderChart';
import { GraRadialBarChart } from './trois-graphique/GraRadialBarChart';
import { Valeurs } from './valeurs/Valeurs';
export const Profil = () => {
  return (
    <div className="profil">
      <Name />
      <div className="graphiques-valeurs">
        <div className="tous-graphiques">
          <ActivityQuotidien />

          <div className="trois-graphiques">
            <GraLineChart />
            <GraRaderChart />
            <GraRadialBarChart />
          </div>
        </div>
        <Valeurs />
      </div>
    </div>
  );
};
