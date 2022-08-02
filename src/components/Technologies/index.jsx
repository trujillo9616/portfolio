import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const partnerList = [
  { img: 'javascript', name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { img: 'typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
  { img: 'python', name: 'Python', link: 'https://www.python.org/' },
  { img: 'react', name: 'React', link: 'https://reactjs.org/' },
  { img: 'sass', name: 'Sass', link: 'https://sass-lang.com/' },
  { img: 'bootstrap', name: 'Bootstrap', link: 'https://getbootstrap.com/' },
  { img: 'mui', name: 'Material UI', link: 'https://mui.com/' },
  { img: 'node', name: 'Node', link: 'https://nodejs.org/en/' },
  { img: 'express', name: 'Express', link: 'https://expressjs.com/' },
  { img: 'graphql', name: 'GraphQL', link: 'https://graphql.org/' },
  { img: 'mongo', name: 'MongoDB', link: 'https://www.mongodb.com/' },
  { img: 'mysql', name: 'MySQL', link: 'https://www.mysql.com/' },
  { img: 'postgres', name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
  { img: 'redis', name: 'Redis', link: 'https://redis.io/' },
  { img: 'git', name: 'Git', link: 'https://git-scm.com/' },
]

export default function Technologies() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <div className='shane_slider'>
            <a href={val.link} target='_blank' rel='noreferrer' key={i} style={{ textDecoration: 'none' }}>
              <div>
                <img
                  src={`img/partners/${val.img}.png`}
                  alt={val.name}
                  data-aos='fade'
                  data-aos-duration='1200'
                  data-aos-delay='0'
                />
                <h4>{val.name}</h4>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </ul>
  )
}
