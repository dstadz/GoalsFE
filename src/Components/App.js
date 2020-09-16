import React from 'react';
import { useRecoilValue } from 'recoil'
import Header from './Header/'
import TimeLine from './TimeLine/'
import GoalTable from './GoalTable'
import LandingPage from './LandingPage/'
import { userState } from '../utils/store'
import { AppBody } from '../styles'


const App = ()  => {
  const user = useRecoilValue(userState)
  if(Object.keys(user).length === 0) return <LandingPage />

  return (
    <AppBody>
      <TimeLine/>
      <Header />
      <GoalTable />
    </AppBody>
  );
}

export default App;
