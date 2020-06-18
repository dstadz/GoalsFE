import React, { useState } from 'react'

import { activeFormState } from '../utils/store'
import { AddFormContainer } from '../styles'


const AddForm = ({type}) => {
  const [onGoing, setOnGoing] = useState(true)

  const habitFunc = () => {
    console.log('make a habit')
  }
  const handleSubmit = () => {
    console.log('hanlde submit')
  }
  const submitForm = (e) => {
    e.preventDefault()
    console.log('submit form')

  }
  return (
    <AddFormContainer>
      <h5>Add a New {type}</h5>
      <form
      onSubmit={submitForm}>
        <label> New {type}:</label>
        <input type='text' placeholder='Become better by...' />

        <label>ongoing? </label>
        <input id='checkbox'
          type="checkbox"
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
