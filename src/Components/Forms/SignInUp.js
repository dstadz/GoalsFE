import React, { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil"
import { userState } from "../../utils/store"
import { SignInUpModal, ButtonBar } from "../LandingPage/styles"
import '../../styles/wip.css'



const SignInUp = ({closeModal}) => {
  const [forgotPass, setforgotPass] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [passVis, setPassVis] = useState(false)
  const setUser = useSetRecoilState(userState)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const config = { headers: {
    "Allowed":"*",
    "Access-Control-Allow-Origin": "localhost:3000",//"https://goalgetter.netlify.app",
    "Access-Control-Request-Headers": "origin, x-requested-with",
    "Access-Control-Request-Method": "POST"
  } }


  if ( Object.keys(errors).length ) console.log("error:",errors)

  const onSubmit = data => {
    if (forgotPass) {
      console.log("send recovery email")

    } else {
      axios.post(`${process.env.REACT_APP_BE}/users/${signIn? "signIn" : "signUp"}`,data, config)
      .then(res => { setUser(res.data) })
      .catch(err => { console.log(err) })
    }
  }


  const recruiterSignIn = () => {
    const recruiterData = {
    "email": "blue@colors.com",
    "password":"blue"
    }

    axios.post(`${process.env.REACT_APP_BE}/users/signIn`, recruiterData, config)
    .then(res => { setUser(res.data) })
    .catch(err => { console.log(err) })
  }

  return (
    forgotPass
    ?<SignInUpModal>
      <h3> Forget Password <button className="close-Button" onClick={() => closeModal(false)} >X</button> </h3>

      <form onSubmit={onSubmit}>
        <label> Email </label>
        <div>
          <input
            type="text"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>
        <input type="submit" value="Send Recovery email thing" />
      </form>

      <p> Miraculously remembered your password? <span onClick={()=> setforgotPass(false)}>signIn</span></p>
    </SignInUpModal>

    :<SignInUpModal>
      <h3 className='wip'>
        {signIn ?"Log In" : "Sign Up"} <button onClick={() => closeModal(false)} >X</button>
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Email </label>
        <div>
          <input
            type="text"
            name="email"
            ref={register({required: true, maxLength: 80})}
          />
        </div>

        {!signIn && <>
          <label> Whats your Name? </label>
          <div>
            <input
              type="text"
              name="name"
              ref={register({required: true, maxLength: 80})}
            />
          </div>

          <label> When were you born? </label>
          <div>
            <input
              type="date"
              name="birthday"
              ref={register({required: true, maxLength: 80})}
            />
          </div>
        </>}

        <label> Password </label>
        <div>
          <input
            type={passVis ? "text" : "password" }
            name="password"
            ref={register({required: true, maxLength: 80})}
          />
          <span onClick={() => setPassVis(passVis => !passVis)}>{passVis ? "👓" : "🕶️" }</span>
        </div>


        {!signIn && <>
          <label> Confirm Password </label>
          <div> <input type="password"
            placeholder="password"
            name="password"
            ref={register({required: true, maxLength: 80})}
          /> </div>
        </> }

        <br />

        <ButtonBar>
          <li> Google </li>
          <li> FaceBook </li>
          <li> Apple </li>
        </ButtonBar>

        <input type="submit" value={signIn ? "Log In" : "Lets get started!"} />
        <br/>
        <input
          type="submit"
          value="recruiter? Click here!"
          onClick={() => recruiterSignIn()} />
      </form>

      <br/>

      <label>
        <input type="checkbox"
          value={keepLoggedIn}
          onClick={() => setKeepLoggedIn(!keepLoggedIn)}
        />
        Keep me logged in
      </label>

      <span onClick={()=> setforgotPass(true)}>I forgot my password</span>
      {signIn
        ? <span>
            Don"t have an account?
            <span onClick={()=>{setSignIn(!signIn)}}> Sign Up </span>
          </span>
        : <span>
          Already have an account?
          <span onClick={()=>setSignIn(!signIn)}> Sign In </span>
        </span>
      }
    </SignInUpModal>
  )
}

export default SignInUp
