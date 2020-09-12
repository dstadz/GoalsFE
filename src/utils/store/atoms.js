import { atom } from 'recoil'

export const userState = atom({
  key: ' userState',
  default: {}
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