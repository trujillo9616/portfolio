import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Technologies from '../components/Technologies'
import Testimonial from '../components/Testimonial'
import Publications from '../components/Publications.jsx'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home-two'>
      <Header />

      <Slider />

      <About />

      <Portfolio />

      <Skills />

      <div className='shane_tm_section'>
        <div className='shane_tm_partners'>
          <div className='container'>
            <div className='partners_inner'>
              <Technologies />
            </div>
          </div>
        </div>
      </div>

      <div className='shane_tm_section'>
        <div className='shane_tm_testimonials'>
          <div className='container'>
            <div className='testimonials_inner'>
              <div
                className='left'
                data-aos='fade-right'
                data-aos-duration='2000'
              >
                <div className='shane_tm_title'>
                  <span>Testimonials</span>
                  <h3>What people say about me</h3>
                </div>
              </div>
              <div
                className='right'
                data-aos='fade-right'
                data-aos-duration='1200'
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Publications />

      <CallToAction />

      <Footer />
    </div>
  )
}

export default Home
