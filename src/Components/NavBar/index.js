import React, { useState } from 'react'
import { NavBarContainer } from '../../styles'

const NavBar = () => {
  const [points, setPoints] = useState(0)
  return (
    <NavBarContainer>
    <div>
      <h3> Goal Getter </h3>
    </div>
      <div>
        <span> UserName </span>
        <span> {points} </span>
        <button> ^ </button>
        <button> Bell </button>
      </div>
    </NavBarContainer>
  )
}

export default NavBar
