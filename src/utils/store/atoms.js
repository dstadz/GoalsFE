import React from 'react'
import { atom } from 'recoil'


export const activeFormState = atom({
  key: 'activeFormState',
  default: null
});