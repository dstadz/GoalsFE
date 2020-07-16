import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'

import { SignInUpModal, ButtonBar } from './styles'
import { userState } from '../../utils/store'

const signInUrl = `https://dstadz.github.io/GoalsBE/api/signIn`
const signUpUrl = `http://localhost:8000/api/signUp`

const SignInUp = ({closeModal}) => {
  const [forgotPass, setforgotPass] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(false)
  const setUser = useSetRecoilState(userState)


  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const { register, handleSubmit, errors } = useForm()


  if ( Object.keys(errors).length ) console.log('error:',errors)
  
  const config = { headers: {
    // "Allowed":"*",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Request-Headers": "origin, x-requested-with",
    // "Access-Control-Request-Method": "POST"
  } }
    const onSubmit = data => {
    if (forgotPass){
      console.log('send recovery email')
    } else if (signIn) {
      axios.post(signInUrl,data, config)
      .then(res => { setUser(res.data.data) })
      .catch(err => { console.log(err) })
    } else { //signUp
      axios.post(signUpUrl,data)
      .then(res => { setUser(res.data.data) })
      .catch(err => { console.log(err) })
    }
  }
    
  

  const color = `purple`
  return (
    forgotPass
    ?<SignInUpModal>
      <button className="close-Button" onClick={()=>closeModal(false)} >X</button>
      <h3> Forget Password </h3>
      <form onSubmit={onSubmit}>
        <label> Email </label>
        <div>
          <input type="text"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <input type="submit" value='Send Recovery email thing' />
      </form>

      <p>Miraculously remembered your password? <span onClick={()=> setforgotPass(false)}>signIn</span></p>
    </SignInUpModal>

    :<SignInUpModal>
      <button onClick={()=>closeModal(false)} >X</button>
      <h3> {signIn ?'Log In' : 'Sign Up'} </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Email </label>
        <div>
          <input type="text"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>
        {!signIn && <>
        <label> Whats your Name? </label>
        <div>
          <input type="text"
            name="name"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <label> When were you born? </label>
        <div>
          <input type="date"
            name="birthday"
            ref={register({required: true, maxLength: 80})}
          />
        </div>
        </>}

        <label> Password </label>
        <div>
          <input type={passVis ? 'text' : 'password' }
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
          <span onClick={()=>setPassVis(!passVis)}>{passVis ? '👓' : '🕶️' }</span>
        </div>


        {!signIn && <>
          <label> Confirm Password </label>
          <div>
            <input type='password'
              placeholder="password"
              name="password"
              ref={register({required: true, maxLength: 80})}
            />
          </div>
        </> }

        <br />

        <ButtonBar>
          <li> Google </li>
          <li> FaceBook </li>
          <li> Apple </li>
        </ButtonBar>

        <input type="submit" value={signIn ? 'Log In' : 'Lets get started!'} />
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
        ? <span> Don't have an account? <span onClick={()=>{setSignIn(!signIn)}}> Sign Up </span> </span>
        : <span> Already have an account? <span onClick={()=>setSignIn(!signIn)}> Sign In </span> </span>
      }
    </SignInUpModal>
  )
}

export default SignInUp
