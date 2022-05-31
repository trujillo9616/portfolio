import React, { useState } from 'react'
import Modal from 'react-modal'
import Map from '../Map'
import Contact from '../Contact'
import Social from '../Social'

Modal.setAppElement('#root')

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='shane_tm_section' id='contact'>
      <div
        className='shane_tm_talk bg_image_props'
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + 'img/callto-action/2.jpg'
          })`,
        }}
      >
        <div className='shape'>
          <img className='svg' src='/img/svg/paper.svg' alt='partners brand' />
        </div>
        {/* End shape */}

        <div className='background' id='talk'>
          <a className='player'></a>
          <div className='overlay'></div>
        </div>
        {/* End background */}

        <div className='talk_inner'>
          <div className='text' data-aos='fade-up' data-aos-duration='1200'>
            <h3>Let's work together!</h3>
          </div>

          <div
            className='button'
            data-aos='fade-up'
            data-aos-duration='1200'
            data-aos-delay='100'
          >
            <button className='white-fill-bg' onClick={toggleModal}>
              Make an enquiry
            </button>
          </div>
        </div>
        {/* End talk_inner */}
      </div>
      {/* Start Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='custom-modal'
        overlayClassName='custom-overlay'
        closeTimeoutMS={500}
      >
        <div className='shane_tm_mobalbox_contact'>
          <button className='close-modal' onClick={toggleModal}>
            <img src='/img/svg/cancel.svg' alt='close icon' />
          </button>
          {/* End close icon */}
          <div className='box_inner'>
            <div className='description_wrap scrollable'>
              {/* Start modal content */}
              <div className='title'>
                <h3>Get in touch</h3>
              </div>
              {/* End title */}

              <div className='wrapper'>
                <div className='left'>
                  <div className='fields'>
                    <Contact />
                  </div>
                </div>
                {/* End left */}
                <div className='right'>
                  <div className='map_wrap'>
                    <Map />
                  </div>
                </div>
                {/* End right */}
              </div>
              {/* End wrapper */}

              <div className='short_info'>
                <ul>
                  <li>
                    <div className='list_inner'>
                      <img
                        className='svg'
                        src='img/svg/location.svg'
                        alt='location'
                      />
                      <p>Monterrey, NL, México</p>
                    </div>
                  </li>
                  {/* End silgle address */}

                  <li>
                    <div className='list_inner'>
                      <img
                        className='svg'
                        src='img/svg/phone.svg'
                        alt='phone'
                      />
                      <p>
                        <a href='tel:+52 81 16201727'>+52 81 16201727</a>
                      </p>
                    </div>
                  </li>
                  {/* End silgle address */}

                  <li>
                    <div className='list_inner'>
                      <img
                        className='svg'
                        src='img/svg/share.svg'
                        alt='share'
                      />
                      <Social />
                    </div>
                  </li>
                  {/* End silgle address */}
                </ul>
              </div>
              {/* End modal conetent */}
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modalbox news */}
      </Modal>
      {/* End modal */}
    </div>
  )
}

export default CallToAction
