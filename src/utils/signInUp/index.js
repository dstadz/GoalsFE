import axios from 'axios'


const config = { headers: {
  "Allowed":"*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Request-Headers": "*",
  "Access-Control-Request-Method": "*"
} }


const signInUrl = `http://localhost:8000/signIn`
const signUpUrl = `http://localhost:8000/signUp`


export const signUpCall = () => {
  //need to make sure passwords match and other stuff
  axios.post(signUpUrl)
    .then(res => {  console.log(res.data.data) })
    .catch(err => { console.log(err) })
}

export const signInCall = data => {
  axios.post(signInUrl,data, config)
  .then(res => { setUser(res.data.data) })
  .catch(err => { console.log(err) })
  
  const config = { headers: { access_control_allow_origin: '*' } }
  (async () => {
      await  axios.get(signInUrl,data,config)

      .then(res => { console.log(res.data.data) })
      .catch(err => { console.log(err) })
    })()
}
