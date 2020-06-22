import React, { useState } from 'react'
import { useRecoilState } from 'recoil'


import { activeFormState } from '../../utils/store'
import { AddFormContainer } from '../../styles'

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
const AddForm = () => {
  const [activeForm, setActiveForm] = useRecoilState(activeFormState)
  const [onGoing, setOnGoing] = useState(true)
  const [nextGoal, setNextGoal] = useState('')
  const [date, setDate] = useState(today)

  const habitFunc = () => {
    console.log('make a habit')
  }

  const submitForm = e => {
    e.preventDefault()

    setActiveForm(null)

  }

  const handleGoalChange = e => {
    setNextGoal(e.target.value)

  }


  return (
    <AddFormContainer>
      <button
        onClick={()=> setActiveForm(null)}
      >X</button>

      <h5>Add a New {activeForm}</h5>

      <form onSubmit={submitForm}>
        <label> New {activeForm}:</label>
        <input
          type='text'
          placeholder='Become better by...'
          value={nextGoal}
          onChange={handleGoalChange}
        />

        <label>ongoing? </label>
        <input
          type="checkbox"
          value={onGoing}
          onClick={() => setOnGoing(!onGoing)}
        />

        {onGoing
          ? <>
            <label> By:</label>
            <input type='date' />
            </>
          : <>
            <label> make it a habit?</label>
            <input id='habit'
              type="checkbox"
              onClick={() => habitFunc()}
            />
            </>
        }
        <br />
        <button> Add </button>
      </form>
    </AddFormContainer>
  )
}

export default AddForm
