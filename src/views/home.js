import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import './home.css'

const Home = (props) => {
  return (
    <div id='home' className="home-container">
      <Helmet>
        <title>TMP EARTH MOVERS</title>
        <meta name="description" content="TMP Earth Movers is a leading provider of earth moving services, offering a wide range of heavy-duty equipment and experienced operators for all your construction and infrastructure needs. With a focus on quality, efficiency, and safety, we deliver top-notch earth moving solutions to clients across the region. Browse our services, learn about our machinery, and get a quote today."/>
      </Helmet>
      <Navbar></Navbar>
      <Hero image1Src="https://images.unsplash.com/photo-1526593676484-54adc4701fee?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3Mzk3Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2 feature1ImgSrc="https://images.unsplash.com/photo-1559029885-dfa0555748d2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3MzkwMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"></Features2>
      <Pricing></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  )
}

export default Home
