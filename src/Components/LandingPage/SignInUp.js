import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

import { signUpCall } from '../../utils/signInUp'
import { SignInUpModal, ButtonBar } from './styles'
import { signInCall } from '../../utils/signInUp'
import { userState } from '../../utils/store'






const SignInUp = ({closeModal}) => {
  const [user, setUser] = useRecoilState(userState)
  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(false)
  const [forgotPass, setforgotPass] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  if ( Object.keys(errors).length ) console.log('error:',errors)

  const onSubmit = () => {
    console.log(data)
    if (forgotPass){
      console.log('send recovery email')
    } else {
      if (signIn) { signInCall(data) }
      else { signUpCall(data) }
    }
  }

// axios.post(backend,{...data, goal_id})
// .then(res => { console.log(res.data.data) })
// .catch(err => { console.log(err) })

  console.log(user)

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
            value="blue@colors.com"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        <label> Password </label>
        <div>
          <input type={passVis ? 'text' : 'password' }
            name="password"
            value="blue"
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
