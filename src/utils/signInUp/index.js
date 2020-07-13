import axios from 'axios'


const config = { headers: {
  "Allowed":"*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Request-Headers": "*",
  "Access-Control-Request-Method": "*"
} }


const signInUrl = `http://localhost:8000/api/signIn`
const signUpUrl = `http://localhost:8000/api/signUp`


export const signUpCall = data => {
  data = {...data, name:'bob', birthday:'01/01/2000'}
  //need to make sure passwords match and other stuff

  const xhr = new XMLHttpRequest();






  axios.post(signUpUrl,data)
    .then(res => {  console.log(res.data.data) })
    .catch(err => { console.log(err, Response.body) })
}

export const signInCall = (data) => {
  let person;
  axios.post(signInUrl,data) //, config)
  .then(res => {
    console.log(res.data.data)
    person = res.data.data
  })
  .catch(err => { console.log(err) })
  return person
}
