import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonial = () => {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  const testimonials = [
    {
      name: 'Sylvia Tattersfield',
      position: 'Data Scientist',
      image: '/img/testimonial/sylvia.jpg',
      quote: 'I have been working with Adrian for over a year now. He is a great developer and has a great attitude towards the work he does. He is very hard working and is always willing to help out with any issues that arise.',
      link: 'https://www.linkedin.com/in/sylvia-tattersfield-marty/'
    },
    {
      name: 'Jorge Garcia',
      position: 'ML Engineer',
      image: '/img/testimonial/jorge.jpg',
      quote: 'I have been working with Adrian for over a year now. He is a great developer and has a great attitude towards the work he does. He is very hard working and is always willing to help out with any issues that arise.',
      link: 'https://www.linkedin.com/in/jorge-garc%C3%ADa-serna-7a756484/'
    },
    {
      name: 'Adrian Trujillo',
      position: 'Software Engineer',
      image: '/img/testimonial/adrian.jpg',
      quote: 'I have been working with Adrian for over a year now. He is a great developer and has a great attitude towards the work he does. He is very hard working and is always willing to help out with any issues that arise.',
      link: 'https://www.linkedin.com/in/adrian-trujillo96/'
    }
  ]

  return (
    <ul>
      <Slider {...settings}>
      {testimonials.map((testimonial, i) => (
        <li key={i} className='item'>
          <div className='texts'>
            <p>
              {testimonial.quote}
            </p>
            <div className='author'>
              <div className='image'>
                <div
                  className='main' 
                  style={{ 
                    backgroundImage: `url(${process.env.PUBLIC_URL + testimonial.image})`,
                  }}></div>
              </div>
              <div className='short'>
                <h3 className='author'>
                  <a href={testimonial.link} target='_blank' rel='noreferrer'>
                    <span>{testimonial.name}</span>
                  </a>
                </h3>
                <h3 className='job'>
                  <span>{testimonial.position}</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      ))}        
      </Slider>
    </ul>
  )
}

export default Testimonial
