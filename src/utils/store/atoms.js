import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {
    // "id": 3,
    // "name": "yellow",
    // "email": "yellow@colors.com",
    // "password": "$2a$12$JJcRCCYuEOxZN4NslFGN0eKI1XB.Bcs510AYcQI7AppLbH92xXybq",
    // "birthday": "08/23/1994"
  }
})

export const goalListState = atom({
  key: 'goalListState',
  default: []
});

export const activeMonthState = atom({
  key: 'activeMonthState',
  default: new Date()
});

// const goalIdListState = atom({
//   key: 'goalIdListState',
//   default: 'Show All',
// });
