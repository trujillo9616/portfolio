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
                  href='https://themeforest.net/user/ib-themes'
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
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  )
}

export default Footer
