import styled from 'styled-components'

export const AppBody = styled.div `
display: flex;
`

export const Side = styled.div `
  background: blue;
  width: 300px;
  height: 100vh;
`


export const MonthBox = styled.div `
  border: 1px solid black;
  width: 10px;
  height: 10px;
  margin: 1px;
  margin-top: 6px;
`
export const YearRow = styled.li `
  display:flex;

  span{
    font-size:16px;
  }
`
export const LifeContainer = styled.div `
  height:90%;
  overflow-y: auto;
  ::-webkit-scrollbar { display: none; }

  ol{
    display: flex;
    padding-left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`