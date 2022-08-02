import React from 'react'

const About = () => {
  return (
    <>
      <div className='shane_tm_section' id='about'>
        <div className='shane_tm_about'>
          <div className='container'>
            <div className='about_inner'>
              <div className='left'>
                <div
                  className='image'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <img src='/img/placeholders/1-1.jpg' alt='placeholder' />

                  <div
                    className='main'
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + 'img/about/meabout.jpg'
                      })`,
                    }}
                  ></div>
                </div>
              </div>

              <div className='right'>
                <div
                  className='shane_tm_title'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <span>About Me</span>
                  <h3>Software Engineer based in Monterrey, MX</h3>
                </div>
                <div
                  className='text'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <p>
                    I'm a Mechatronic Engineer turned into Software Engineer. Through hard work and passion, I have acquired the skills and knowledge
                    necessary to make your project a success. I enjoy every step
                    of the design process, from discussion and collaboration.
                  </p>
                </div>
                <div
                  className='shane_tm_button'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                >
                  <a href='resume/Adrian_Trujillo_Mechatronics_Engineer.pdf' download>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
