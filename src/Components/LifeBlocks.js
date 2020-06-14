import React from 'react'

const Month = () => {
  return(
    <div style={{width: '10px', height:'5px',margin:'1px', background:'red'}}>
    
    </div>
  )
}

const Year = () => {
  const monthsInYear = 12
  const year = Array(monthsInYear).fill().map((_, i) => i);

  return(
    <div style={{display:'flex'}}>
      {year.map( m => (<Month m={m}/>))}
    </div>
  )
}

const LifeBlocks = () => {

  const lifeTime = 80
  const life = Array(lifeTime).fill().map((_, i) => i);

  return (
    <div>
    {life.map( m => (<Year m={m}/>))}

    </div>
  )
}

export default LifeBlocks
