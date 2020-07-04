import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import { SignInUpModal } from './styles'



// <br/>

// <label> BirthDate</label>
// <input type='date'
//   name="target_date"
//   ref={register}
//   />



const SignInUp = () => {
  const [signIn, setSignIn] = useState(true)
  const [keepLoggedIn, setKeepLoggedIn] = useState(true)
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log(errors)

  const onSubmit = data => {
  //   data = {...data, goal_id}
  //   axios.post(backend,{...data, goal_id})
  //   .then(res => { console.log(res.data.data) })
  //   .catch(err => { console.log(err) })
  }

  if (signIn) return (
    <SignInUpModal>
      Log In
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="text"
          placeholder="email"
          name="email"
          ref={register({required: true, maxLength: 80})}
        />


        <label>name</label>
        <input type="text"
          placeholder="Name"
          name="name"
          ref={register({required: true, maxLength: 80})}
        />


        <div>
          <button> Google </button>
          <button> FaceBook </button>
          <button> Apple </button>
        </div>

        <input type="submit"
          value="Log In"/>


        <label> <input type="checkbox"
        value={keepLoggedIn}
        onClick={()=> setKeepLoggedIn(!keepLoggedIn)}
        />Keep me logged in </label>
      </form>


    </SignInUpModal>
  )
}

export default SignInUp
