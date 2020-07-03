import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil'
import axios from 'axios'

import { userState } from '../utils/store'



import SideBar from './SideBar/'
import LandingPage from './LandingPage/'
import Header from './Header/'
import TableThing from './Table/'

import { AppBody } from '../styles'



const userUrl = `http://localhost:8000/api/users/1`



const App = ()  => {
  const setUser = useSetRecoilState(userState)

  useEffect(() => { (async () => {
    await axios.get(userUrl)
    .then(res => {  setUser(res.data.data) })
    .catch(err => { console.log(err) })
  })() }, [])




  const signedIn = false
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
