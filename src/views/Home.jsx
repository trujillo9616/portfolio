import React from 'react'
import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import Skills from '../components/skills/Skills'
import Brand from '../components/BrandAnimation'
import Testimonial from '../components/testimonial/Testimonial'
import Publications from '../components/publications/Publications'
import CallToAction from '../components/calltoactions/CallToAction'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='home-two'>
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      <Skills />
      {/* End Skills Section */}

      <div className='shane_tm_section'>
        <div className='shane_tm_partners'>
          <div className='container'>
            <div className='partners_inner'>
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End shane_tm_partners */}

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
      {/* End  shane_tm_testimonials */}

      <Publications />
      {/* End Blog Section */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  )
}

export default Home
