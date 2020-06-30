import { atom } from 'recoil'
import axios from'axios'



const goals = `http://localhost:8000/api/goals`
let goalList = []
axios.get(goals)
.then(res => { goalList = res.data.data })
.catch(err => { console.log(err) })

// const habits = `http://localhost:8000/api/habits`
// let habitList = []
// axios.get(habits)
// .then(res => { habitList = res.data.data })
// .catch(err => { console.log(err) })


export const activeFormState = atom({
  key: 'activeFormState',
  default: null
});

export const goalListState = atom({
  key: 'goalListState',
  default: goalList
});

// export const habitListState = atom({
//   key: 'habitListState',
//   default: habitList
// });
