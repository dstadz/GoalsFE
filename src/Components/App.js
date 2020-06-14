import React from 'react';

import SideBar from './SideBar'
import LandingPage from './LandingPage'
import TopStuff from './TopStuff'
import TableThing from './TableThing'

import { AppBody } from '../styles'


const App = ()  => {

  const signedIn = true
  if (!signedIn ) return <LandingPage />

  return (
    <AppBody>
      <SideBar/>
      <div>
        <TopStuff />
        <TableThing />
      </div>
    </AppBody>
  );
}

export default App;
