import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {
    "id": 1,
    "name": "blue",
    "email": "blue@colors.com",
    "password": "$2a$12$ryzLX0wYX3HzCl0obS1T4etlhCafkmvvu8QGC1m93JVV0nvXV33ay",
    "birthday": "06/23/1994"
  }
})

export const activeFormState = atom({
  key: 'activeFormState',
  default: null
});

export const goalListState = atom({
  key: 'goalListState',
  default: []
});


export const habitListState = atom({
  key: 'habitListState',
  default: [{X:[]}]
});

// const goalIdListState = atom({
//   key: 'goalIdListState',
//   default: 'Show All',
// });