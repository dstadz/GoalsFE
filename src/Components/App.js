import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil'
import axios from 'axios'

import { userState } from '../utils/store'



import SideBar from './SideBar/'
import LandingPage from './LandingPage/'
import Header from './Header/'
import TableThing from './Table/'

import { AppBody } from '../styles'



const userUrl = `http://localhost:8000/api/users/`



const App = ()  => {
  const [user, setUser] = useRecoilState(userState)

  
  if(Object.keys(user).length == 0) return <LandingPage />
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
