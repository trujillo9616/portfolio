import React from 'react'
import Social from '../SocialTwo'

const Slider = () => {
  return (
    <div className='slider-two'>
      <div className='shane_tm_hero' id='home' data-style='three'>
        <div className='background'>
          <div
            className='image'
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + 'img/slider/meslider.jpg'
              })`,
            }}
          ></div>
        </div>

        <div className='container'>
          <div className='content'>
            <div className='name_wrap'>
              <h3>
                <span>Adrian</span> <span className='overlay_effect'></span>
              </h3>
            </div>
            <div>
              <h3>
                Trujillo<span className='overlay_effect'></span>
              </h3>
            </div>

            <div className='job_wrap'>
              <span className='job'>
                Software Engineer
                <span className='overlay_effect'></span>
              </span>
            </div>

            <div className='job_wrap sociallo'>
              <span className='job'>
                <Social />
                <span className='overlay_effect'></span>
              </span>
            </div>
          </div>

          <div className='shane_tm_down loaded'>
            <div className='line_wrapper'>
              <div className="line"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slider
