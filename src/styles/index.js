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
  width: 8px;
  height: 8px;
  margin: 1px;
  margin-top: 5px;
  position: relative;
  display: inline-block;
  :hover{ background:grey; }

  span {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    width: 120px;
    position: absolute;
    top: 15px;
    right:-50px;
    z-index: 1;
  }

  :hover span {
    visibility: visible;
  }
`
export const YearRow = styled.li `
  display:flex;
`
export const LifeContainer = styled.div `
  height:90%;
  width:90%;
  margin:auto;

  background:white;
  border: 1px solid black;
  overflow-y: auto;
  ::-webkit-scrollbar { display: none; }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3{
    margin:0;
  }

  ol{
    padding-left: 0;
    margin-top: 0;
    justify-content: flex-end;
    align-items: flex-end;
  }

    li:nth-child(-n+18) div { border: 2px solid red; }
    li:nth-child(n+18):nth-child(-n+40) div { border: 2px solid green; }
    li:nth-child(n+41) div { border: 2px solid grey; }
  }
`
export const TopStuff = styled.div`
  background:gray;
  div{
    display:flex;
    justify-content: space-around;
  }


`
export const AddNewBTN = styled.button`
  background: blue;
  border-radius: 1em;
`
export const AddFormContainer = styled.div`
  button {
    margin-left:auto;
  }

  h5{
    margin: 0;
  }
  background:green;
  width: 300px;
  display:flex;
  flex-direction: column;
  align-items:center;
`