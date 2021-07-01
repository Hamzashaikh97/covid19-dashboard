import React from 'react';
import GlobalStats from './globalStats';
import  AllCountries from './allCountries'
import Graph from './graph' 
import Map from './map'

export default function InfoPanel({currentScreen}){
console.log(currentScreen)
  if (currentScreen[0] === 0)
  return (
    <GlobalStats />)

else if (currentScreen[0] === 1)
  return (<AllCountries />
  )
  else if (currentScreen[0] === 2)
  return (<Graph />
  )
;
  else if (currentScreen[0] === 3)
  return (<Map/>);

  else return(<GlobalStats/>);
}