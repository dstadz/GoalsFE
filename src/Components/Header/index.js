import React, { useState } from 'react'
import { TopStuff, AddNewBTN } from '../../styles'
import AddGoalForm from '../Forms/AddGoalForm'

const Header = () => {
  const [addOpen, setAddOpen] = useState(false)
  return (
    <TopStuff>
      <h1> How will you become the person you want to be? </h1>
    {/*    <h1>add default goal for every user:</h1>
    <h2>'I will retire by <input type='date' /> or age <input type='number'/></h2>
    <h2> right side bar can have a goal/habit suggestion dealer</h2> */}
      <div>
        <div>
          <AddNewBTN onClick={()=>setAddOpen(addOpen => !addOpen)} > add a new goal </AddNewBTN>
          {addOpen && <AddGoalForm />}
        </div>
      </div>
    </TopStuff>
  )
}

export default Header
