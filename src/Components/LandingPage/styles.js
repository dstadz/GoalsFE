import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  background:grey;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  img{
    width:500px;
  }
`

export const Nav = styled.nav`
  background: green;
  display:flex;
  justify-content: space-between;
  width:95%;
  margin: .1rem;
  padding: .1rem;

  ul{
    display:flex;

    li{
      margin:auto 40px;
    }
  }

`

export const Hero = styled.div`
  background: white;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 1rem;

  width: 75%;

`

export const ReviewBox =styled.section`
  background: yellow;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  margin: 1rem;

  ul{
    display: flex;
  }
`

export const Section = styled.section`
  background: white;

  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items:center;

  margin: 1rem;

  width: 940px;
  
  @media(max-width: 900px){
    width:75%
  }

  div{
    width:500px;
  }

  img{
    background:blue;
    height:200px;
    width:400px;
  }

  ol{
    width:100%;
    display:flex;
    flex-direction: row;

    li{
      margin: 0 auto;
      list-style: none;
    }
  }
`

export const LetsDoThisBTN = styled.button`
  background: red;
  :before{ content:"Lets Do This" }

  border-radius: .5rem;
  border: none;
  padding: .5rem 1rem;
`

export const FooterContainer = styled.footer`
  display:flex;
  justify-content: space-between;
  div{
    width:33%;
  }

  ul{
    display:flex;
    border: 1px solid green;
  }

  ol{
    list-style: none;
  }
`

export const SignInUpModal = styled.div`
  background: purple;
  position: fixed;
  z-index: 2;
  top: 10rem;
  width:32rem;
  height: 18rem;

  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  form{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  r}
`