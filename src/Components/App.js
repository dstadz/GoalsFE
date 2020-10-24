import React from 'react';
import { useRecoilValue } from 'recoil'
import DashBoard from './DashBoard/'
import TimeLine from './TimeLine/'
import NavBar from './NavBar/'
import GoalTable from './GoalTable'
import LandingPage from './LandingPage/'
import { userState } from '../utils/store'
import { AppBody } from '../styles'


const App = ()  => {
  const user = useRecoilValue(userState)
  if(Object.keys(user).length === 0) return <LandingPage />

  return (
    <AppBody>
      <NavBar />
      <TimeLine />
      <DashBoard />
      <GoalTable />
    </AppBody>
  );
}

export default App;
