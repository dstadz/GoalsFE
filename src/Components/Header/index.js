import React from 'react'
import { useRecoilState } from 'recoil'


import { activeFormState } from '../../utils/store'
import { TopStuff, AddNewBTN } from '../../styles'

import AddGoalForm from './AddGoalForm'

const Header = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)

  return (
    <TopStuff>
      <h1> How will you become the person you want to be?</h1>
      <div>
        <AddNewBTN
          onClick={()=>setActiveForm('Goal')}
        > add a new goal </AddNewBTN>

        <AddNewBTN
        onClick={()=>setActiveForm('Habit')}
        > bucket </AddNewBTN>
        <AddNewBTN> 4th thing </AddNewBTN>
      </div>

      {activeForm && <AddGoalForm />}
    </TopStuff>
  )
}

export default Header
