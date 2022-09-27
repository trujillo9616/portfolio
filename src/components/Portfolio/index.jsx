import React from 'react'

const portfolioItems = [
  {
    img: 'movieapi',
    title: 'MovieApp Website',
    link: 'https://movieapptruji.vercel.app/',
    delayAnimation: '100'
  },
  {
    img: 'lotr',
    title: 'LotR Memory Game',
    link: 'https://lotrmemory-atrujillo.netlify.app/',
    delayAnimation: '100'
  },
  {
    img: 'ledger',
    title: 'Ledger CLI Tool',
    link: 'https://github.com/trujillo9616/LedgerTruji',
    delayAnimation: '100'
  }
]

const Portfolio = () => {
  return (
    <div className='shane_tm_section' id='portfolio'>
      <div className='shane_tm_portfolio'>
        <div className='container'>
          <div className='positon-relative'>
            <div className='shane_tm_title'>
              <div className='title_flex'>
                <div className='left'>
                  <span>Portfolio</span>
                  <h3>Project Portfolio</h3>
                </div>
              </div>
            </div>

            <div className='portfolio_list has-effect'>
              <ul className='gallery-zoom'>
                {portfolioItems.map((item, i) => (
                  <li
                    key={i}
                    data-aos='fade-right'
                    data-aos-duration='1200'
                    data-aos-delay={item.delayAnimation}
                  >
                    <div className='inner'>
                      <div className='entry shane_tm_portfolio_animation_wrap'>
                        <a
                          href={item.link}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          <img
                            src={`/img/portfolio/${item.img}.jpg`}
                            alt={item.meta}
                          />
                        </a>
                      </div>
                      <div className='mobile_title'>
                        <h3>
                          <a
                            href={item.link}
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {item.title}
                          </a>
                        </h3>
                        <span>{item.meta}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
