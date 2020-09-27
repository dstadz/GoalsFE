import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {}
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
