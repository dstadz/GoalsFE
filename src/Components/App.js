import React from 'react';

import SideBar from './SideBar/'
import LandingPage from './LandingPage'
import Header from './Header/'
import TableThing from './Table/'

import { AppBody } from '../styles'


const App = ()  => {

  const signedIn = true
  if (!signedIn ) return <LandingPage />

  return (
    <AppBody>
      <SideBar/>
      <div>
        <Header />
        <TableThing />
      </div>
    </AppBody>
  );
}

export default App;
