import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AddGoalForm from '../Forms/AddGoalForm'
import { TopStuff, AddNewBTN } from '../../styles'
import { activeMonthState } from '../../utils/store'

const Header = () => {
  const [addOpen, setAddOpen] = useState(false)
  const [month, setMonth] = useRecoilState(activeMonthState);

  console.log(month)
  return (
    <TopStuff>
      <div>
        <h1> How will you become the person you want to be? </h1>
        {/*<h1>add default goal for every user:</h1> <h2>'I will retire by <input type='date' /> or age <input type='number'/></h2> <h2> right side bar can have a goal/habit suggestion dealer</h2> */}
        <AddNewBTN onClick={()=>setAddOpen(addOpen => !addOpen)} > add a new goal </AddNewBTN>
        {addOpen && <AddGoalForm />}
      </div>

      <Calendar
        calendarType={"US"}
        onChange={setMonth}
        value={month}
      />
    </TopStuff>
  )
}

export default Header
