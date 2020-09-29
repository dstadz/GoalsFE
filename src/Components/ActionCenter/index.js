import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Calendar from 'react-calendar';
import CountDowns from './CountDowns'
import 'react-calendar/dist/Calendar.css';
import AddGoalForm from '../Forms/AddGoalForm'
import { ActionCenter, AddNewBTN } from '../../styles'
import { activeMonthState } from '../../utils/store'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [month, setMonth] = useRecoilState(activeMonthState);

  return (
    <ActionCenter>
      <div>
        <h1> How will you become the person you want to be? </h1>
        {/*<h1>add default goal for every user:</h1> <h2>'I will retire by <input type='date' /> or age <input type='number'/></h2> <h2> right side bar can have a goal/habit suggestion dealer</h2> */}
        <AddNewBTN onClick={()=>setOpen(open => !open)} > add a new goal </AddNewBTN>

        {open && <AddGoalForm open={open} setOpen={setOpen} />}
      </div>

      <Calendar
        calendarType={"US"}
        onChange={setMonth}
        value={month}
      />

      <CountDowns />
    </ActionCenter>
  )
}

export default Header
