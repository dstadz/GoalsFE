import React, { useState } from 'react'


import Footer from './Footer'
import SignInUp from '../Forms/SignInUp'

import {
  LandingPageContainer,
  Header,
  MobileHeader,
  StyledBurger,
  Hero,
  ReviewBox,
  FakeReview,
  Section,
  LetsDoThisBTN,
} from './styles'


import randomArt from '../../assets/randomArt.jpg'
// import screenShot from '../../assets/screenShot.png'
import testimonialPic from '../../assets/testimonialPic.png'
import finalPic from '../../assets/finalPic.png'

const timeList = ['100 years','1200 months','5200 weeks','36500 days']
const fakeReviews = [{
  reviewer:'Googol',
  rating:'⭐⭐⭐⭐⭐⭐',
  comment:`I couldn't have made my company without having Goals`
},{
  reviewer: 'the place where you ',
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
        <img src={randomArt} alt={'random art'}/>

        <h2> Become the ideal you </h2>
        <p> You'll be lucky if you get <span>{time}</span> </p>
        <p> Gain perspective and awareness by getting all your aspirations and dreams out of your head and onto your goal list (no matter where you are or what device you use). </p>
        <span> Browse Goals features </span>
        <span> See Goals in action </span>
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
          <h4> a bunch of other people do finish a lot of goals </h4>
          <h6> nile, fakebook, wetwerk mickey </h6>
        </div>
        <img src={testimonialPic} alt={'testimonial'}/>
      </Section>

      <Section>{/*2- */}
        <div>
          <p> "I was literally a barely functional person who struggled to work towards any form of self improvement or betterment until I started using Goals" </p>
        </div>
        <img src={testimonialPic} alt='testiminial'/>
        <ol>
          {peopleList.map((p,i) => (<li key={i}> { p } </li>))}
        </ol>
      </Section>

      <Section>{/*3- */}
        <div>
          <h2> A goal manager you can trust for life </h2>
          <p> In the {'timeSinceInit'} that I've been making Goals, I've been looking for someone to give me a lot of money to work on something else. </p>
          <p> I am committed to improving my life by getting a job in tech, and earning your trust through this high quality app helps me and you with our goals. </p>
        </div>
        <img src={finalPic} alt='final'/>
      </Section>

      <Section>{/*4- */}
        <img src={finalPic} alt='final'/>
        <div>
          <h2> Get your life together with Goals</h2>
          <LetsDoThisBTN onClick={()=> setModalUp(!modalUp)}/>
        </div>
      </Section>




      <Footer/>
    </LandingPageContainer>
  )
}

export default LandingPage
