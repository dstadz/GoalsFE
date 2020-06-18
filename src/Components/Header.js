import React, { useState } from 'react'
import { useRecoilState } from 'recoil'


import { activeFormState } from '../utils/store'
import { TopStuff, AddNewBTN } from '../styles'

import AddForm from './AddForm'

const Header = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  const openForm = () => {
    console.log('open')
  }

  return (
    <TopStuff>
      <h1> How will you become the person you want to be?</h1>
      <div>
        <AddNewBTN
          onClick={()=>setActiveForm('Goal')}
        > add a new goal </AddNewBTN>

        <AddNewBTN
        onClick={()=>setActiveForm('Habit')}
        > add a new habit </AddNewBTN>
        <AddNewBTN> bucket </AddNewBTN>
        <AddNewBTN> 4th thing </AddNewBTN>
      </div>

      {activeForm && <AddForm type={activeForm} />}
    </TopStuff>
  )
}

export default Header
