import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

import { SignInUpModal, ButtonBar } from './styles'
import { userState } from '../../utils/store'





const signInUrl = `http://localhost:8000/api/signIn`
const signUpUrl = `http://localhost:8000/api/signUp`


const SignInUp = ({closeModal}) => {
  const [user, setUser] = useRecoilState(userState)
  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(false)
  const [forgotPass, setforgotPass] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log('error:',errors)

  const onSubmit = data => {
    if (forgotPass){
      console.log('send recovery email')
    } else {
      if (signIn) {
        axios.post(signInUrl,data) //, config)
        .then(res => { setUser(res.data.data) })
        .catch(err => { console.log(err) })
      } else {
        axios.post(signUpUrl, {...data, name:'bob', birthday:'01/01/2000'})
        .then(res => { setUser(res.data.data) })
        .catch(err => { console.log(err) })
      }
    }
  }


  console.log(user)
  const color = `green`
  return (
    forgotPass
    ?<SignInUpModal>
      <button className="close-Button" onClick={()=>closeModal(false)} >X</button>
      <h3> Forget Password</h3>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <div>
          <input type="text"
            placeholder="email"
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

            value={`${color}@colors.com`}

            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <label> Password </label>
        <div>
          <input type={passVis ? 'text' : 'password' }
            name="password"

            value={`${color}`}

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

              value={`${color}`}

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
          
          <input type="submit" value={signIn ? 'Log In' : 'Sign Up'} />
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
