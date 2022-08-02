import SocialTwo from '../SocialTwo'

const Footer = () => {
  return (
    <>
      <div className='shane_tm_section'>
        <div className='shane_tm_copyright'>
          <div className='container'>
            <div className='inner'>
              <p>
                &copy; {new Date().getFullYear()} by{' '}
                <a
                  href='https://www.linkedin.com/in/adrian-trujillo96/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Adrian Trujillo
                </a>
                . All rights reserved.
              </p>
            </div>
            <div className='inner'>
              <SocialTwo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
