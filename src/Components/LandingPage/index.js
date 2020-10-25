import React, { useState } from 'react'


import Footer from './Footer'
import SignInUp from '../Forms/SignInUp'

import {
  LandingPageContainer,
  Header,
  StyledBurger,
  Hero,
  ReviewBox,
  FakeReview,
  Section,
  LetsDoThisBTN,
} from './styles'


import hill from '../../assets/hill.jpg'
import rickTrip from '../../assets/rickTrip.jpg'
import multitasking from '../../assets/multitasking.jpg'
import sunset from '../../assets/sunset.jpg'

const timeList = ['100 years','1200 months','5200 weeks','36500 days']
const fakeReviews = [{
  reviewer:'Googol',
  rating:'⭐⭐⭐⭐⭐⭐',
  comment:`I couldn't have made my company without having Goals`
},{
  reviewer: 'that place where you get all the apps',
  rating:'🍎🍎🍎🍎🍎',
  comment:`featured app \n 4.9 apples, \n at least 3+ reviews`
},{
  reviewer:'The Splurge',
  rating:'9.9/10',
  comment:`"The best existential get-your-life-together app we've seen all week`
},
]
const peopleList = ['creatives','developers','students','small businesses','entreprenuers','freelancers']
// todoist.com
const LandingPage = () => {
  const [modalUp, setModalUp] = useState(false)
  const [open, setOpen] = useState(false);

  const time = timeList[0]
  return (
    <LandingPageContainer>
      <Header open={open} setOpen={setOpen}>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div /> <div /> <div />
        </StyledBurger>
        <nav>
          <ul>
            <li>
              <a
                href="https://danielstadler.com/"
                target='_blank'
                rel="noopener noreferrer"
              >Goal Getter</a>
            </li>
            <li> <a>Features</a> </li>
            <li> <a>Premium</a> </li>
            <li> <a>Resources</a> </li>
            <li className='spacer'></li>
            <li> <span onClick={()=> setModalUp(modalUp => !modalUp)}> Sign up </span> </li>
            <li> <span onClick={()=> setModalUp(modalUp => !modalUp)}> Sign in </span> </li>
          </ul>

        </nav>
      </Header>

      { modalUp && <SignInUp closeModal={setModalUp}/>}


      <Hero>
        <h1>Accomplish everything with Goal Getter</h1>
        <LetsDoThisBTN onClick={()=> setModalUp(modalUp => !modalUp)}/>
        <img src={rickTrip} alt={'random art'}/>

        <h2> Become the ideal you </h2>
        <p> You'll be lucky if you get {time} to do everything you want to do </p>
        <p> Gain perspective and awareness by getting all your aspirations and dreams out of your head and onto your goal list (no matter where you are or what device you use). </p>
        {/* <span> Browse Goals features </span>
        <span> See Goals in action </span> */}
      </Hero>

      <ReviewBox>
        <ul>
          {fakeReviews.map(r => (
            <FakeReview>
              <h3> {r.reviewer} </h3>
              <span> {r.rating} </span>
              <h4> {r.comment} </h4>
            </FakeReview>
            ))}
        </ul>
      </ReviewBox>

      <Section>{/*1- */}
        <div>
          <p> Goals has helped me and </p>
          <h2> a bunch of other people do finish a lot of goals </h2>
          {/* <h6> nile, fakebook, wetwerk mickey </h6> */}
        </div>
        <img src={hill} alt={'testimonial'}/>
      </Section>

      <Section>{/*2- */}
        <img src={multitasking} alt='testiminial'/>
        <div>
          <p> "I was literally a barely functional person who struggled to work towards any form of self improvement or betterment until I started using Goals" </p>
        </div>
      </Section>
      {/* <ol> {peopleList.map((p,i) => (<li key={i}> { p } </li>))} </ol> */}

      <Section>{/*4- */}
        <div>
          <h2> Get your life together with Goals</h2>
          <LetsDoThisBTN onClick={()=> setModalUp(!modalUp)}/>
        </div>
        <img src={sunset} alt='final'/>
      </Section>




      <Footer/>
    </LandingPageContainer>
  )
}

export default LandingPage
