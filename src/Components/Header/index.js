import React from 'react'
import { useRecoilState } from 'recoil'


import { activeFormState } from '../../utils/store'
import { TopStuff, AddNewBTN } from '../../styles'
import { userState } from '../../utils/store'
import { useRecoilValue } from 'recoil'


import AddGoalForm from './AddGoalForm'

const Header = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  // const { name, id, birthday, email }  = useRecoilValue(userState)
  return (
    <TopStuff>
      <h1> How will you become the person you want to be? </h1>



      <h1>add default goal for every user:</h1>
      <h2>'I will retire by <input type='date' /> or age <input type='number'/></h2>
      <h2> right side bar can have a goal/habit suggestion dealer</h2>



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
