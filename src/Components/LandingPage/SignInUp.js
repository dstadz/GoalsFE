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



const SignInUp = ({closeModal}) => {

  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(true)
  const [keepLoggedIn, setKeepLoggedIn] = useState(true)
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log(errors)

  const onSubmit = data => {
  //   data = {...data, goal_id}
  //   axios.post(backend,{...data, goal_id})
  //   .then(res => { console.log(res.data.data) })
  //   .catch(err => { console.log(err) })
  }

  return (
    <SignInUpModal>
    <div>
      {signIn ? 'Log In' : 'Sign Up'}
      <button onClick={()=>closeModal(false)} >X</button>
    </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="text"
          placeholder="email"
          name="email"
          ref={register({required: true, maxLength: 80})}
        />


        <label>Password</label>
        <input type={passVis ? 'password' : 'text' }
          value="Password"
          name="password"
          ref={register({required: true, maxLength: 80})}
          />
          <span onClick={()=>setPassVis(!passVis)}>{passVis ? '🕶️' : '👓' }</span>


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
        /> Keep me logged in </label>

        <span>I forgot my password</span>
      </form>

      {signIn
        ? <p>Don't have an account? <span onClick={()=>setSignIn(!signIn)}>Sign Up</span></p>
        : <p> Already have an account? <span onClick={()=>setSignIn(!signIn)}>Sign In</span></p>
      }
    </SignInUpModal>
  )
}

export default SignInUp
