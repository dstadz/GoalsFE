import React, { useState } from 'react'


import { TopStuff, AddNewBTN } from '../../styles'
// import { userState } from '../../utils/store'
// import { useRecoilValue, useRecoilState } from 'recoil'


import AddGoalForm from './AddGoalForm'
// import { habitListState } from '../../utils/store/atoms'

const Header = () => {
  const [addOpen, setAddOpen] = useState(false)
  // const { name, id, birthday, email }  = useRecoilValue(userState)
  // const [habitList, setHabitlist] = useRecoilState(habitListState)

  return (
    <TopStuff>
      <h1> How will you become the person you want to be? </h1>



      <h1>add default goal for every user:</h1>
      <h2>'I will retire by <input type='date' /> or age <input type='number'/></h2>
      <h2> right side bar can have a goal/habit suggestion dealer</h2>



      <div>
        <div>
          <AddNewBTN onClick={()=>setAddOpen(addOpen => !addOpen)} > add a new goal </AddNewBTN>
          {addOpen && <AddGoalForm />}
        </div>

        <AddNewBTN
        onClick={()=>setAddOpen('Habit')}
        > Sort By: </AddNewBTN>

      </div>

    </TopStuff>
  )
}

export default Header
