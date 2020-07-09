import React, { useState } from 'react'
// import axios from 'axios'
import { useForm } from 'react-hook-form'

import { SignInUpModal, ButtonBar } from './styles'



// <br/>

// <label> BirthDate</label>
// <input type='date'
//   name="target_date"
//   ref={register}
//   />



const SignInUp = ({closeModal}) => {

  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(true)
  const [forgotPass, setforgotPass] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log(errors)

  const onSubmit = data => {
  //   data = {...data, goal_id}
  //   axios.post(backend,{...data, goal_id})
  //   .then(res => { console.log(res.data.data) })
  //   .catch(err => { console.log(err) })
  }

  return (
    forgotPass
    ?<SignInUpModal>
      <button className="close-Button" onClick={()=>closeModal(false)} >X</button>
      <h3> Forget Password</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
          <input type="text"
            placeholder="email"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
      </form>
      <p>Miraculously remembered your password? <span onClick={()=> setforgotPass(false)}>signIn</span></p>
    </SignInUpModal>


    :<SignInUpModal>
      <button className="close-Button" onClick={()=>closeModal(false)} >X</button>
      <h3> {signIn ?'Log In' : 'Sign Up'} </h3>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label> Email </label>
        <div>
          <input type="text"
            placeholder="email"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <label> Password </label>
        <div>
          <input type={passVis ? 'password' : 'text' }
            placeholder="password"
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
          <span onClick={()=>setPassVis(!passVis)}>{passVis ? '🕶️' : '👓' }</span>
        </div>


        {!signIn && <div>
          <label> Confirm Password </label>
          <input type={passVis ? 'password' : 'text' }
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
        </div> }

        <ButtonBar>
          <li> Google </li>
          <li> FaceBook </li>
          <li> Apple </li>
        </ButtonBar>

        <input type="submit" value="Log In"/>
      </form>

      <br/>

      <label>
        <input type="checkbox"
          value={keepLoggedIn}
          onClick={()=> setKeepLoggedIn(!keepLoggedIn)}
        />
        Keep me logged in
      </label>

      <span onClick={()=> setforgotPass(true)}>I forgot my password</span>
      {signIn
        ? <span>Don't have an account? <span onClick={()=>{setSignIn(!signIn)}}>Sign Up</span></span>
        : <span> Already have an account? <span onClick={()=>setSignIn(!signIn)}>Sign In</span></span>
      }
    </SignInUpModal>
  )
}

export default SignInUp
