import React from 'react';
import { useRecoilValue } from 'recoil'
// import axios from 'axios'

import LandingPage from './LandingPage/'
import Header from './Header/'
import SideBar from './SideBar/'
import TableThing from './Table/'

import { userState } from '../utils/store'
import { AppBody } from '../styles'

// const userUrl = `http://localhost:8000/api/users/`

const App = ()  => {
  const user = useRecoilValue(userState)

  if(Object.keys(user).length === 0) return <LandingPage />
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
