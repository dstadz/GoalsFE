import React from 'react';
import { useRecoilValue } from 'recoil'
// import axios from 'axios'

import LandingPage from './LandingPage/'
import Header from './Header/'
import TimeLine from './TimeLine/'
import GoalTable from './GoalTable'
// import OtherSide from './OtherSide/'

import { userState } from '../utils/store'
import { AppBody } from '../styles'


const App = ()  => {
  const user = useRecoilValue(userState)
  // console.log(user)

  //APP IDEA: "GetMe" => TINDER/HINGE CLONE, BUT ALL PROMPTS ARE GIF/VIDEOS WITH SPECIFIC DIRECTIONS:
  /*
    - TALK ABOUT YOUR MORNING ROUTINE
    - SPRINT 50 YDS FROM {THIS ANGLE}
    - FRY A PANCAKE, SHOW INGREDIENTS, NARRATE PROCESS (SIDE MONOLOGUE OPTIONAL)
    - DO A CARTWHEEL
    -
  */

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
