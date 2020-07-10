import axios from 'axios'

const signInUrl = `http://localhost:8000/signIn`
const signUpUrl = `http://localhost:8000/signUp`


export const signUpCall = () => {
  axios.post(signUpUrl)
    .then(res => {  console.log(res.data.data) })
    .catch(err => { console.log(err) })
}

export const signInCall = data => {
  console.log(data)

  
  const config = { headers: { access_control_allow_origin: '*' } }
  (async () => {
      await  axios.get(signInUrl,data,config)

      .then(res => { console.log(res.data.data) })
      .catch(err => { console.log(err) })
    })()
}
