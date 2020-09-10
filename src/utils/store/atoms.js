import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {
    id: 2,
    name: "red",
    email: "red@colors.com",
    password: "$2a$12$IOEJKNlmbZ7r87nm1.xKweUALlGj9sjQmN6PZ8pkkL0J81HOGYqNm",
    birthday: "01/23/1945"
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