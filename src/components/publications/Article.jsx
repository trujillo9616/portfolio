import React from 'react'
import moment from 'moment'

const Article = ({ article }) => {
  const { title, image_url, published_at, url } = article

  return (
    <div className='list_inner'>
      <div className='image' >
        <a href={`${url}`} target='_blank' rel='noreferrer'>
          <img src='/img/placeholders/4-3.jpg' alt='thumb' />
        </a>
        <div
          className='main'
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        ></div>
      </div>

      <div className='details'>
        <a href={`${url}`} target='_blank' rel='noreferrer'>
          <h3 className='title'>
            {title}
          </h3>
        </a>
        <p className='date'>
          By <a href='#'>Adrian Trujillo</a> <span>{moment(published_at).format('ll')}</span>
        </p>
      </div>
    </div>
  )
}

export default Article
