import { atom } from 'recoil'
import axios from'axios'

const goals = `http://localhost:8000/api/goals`
let goalList = []

axios.get(goals)
.then(res => { goalList = res.data})
.catch(err => { console.log(err) })



export const activeFormState = atom({
  key: 'activeFormState',
  default: null
});

export const goalListState = atom({
  key: 'goalListState',
  default: goalList
});