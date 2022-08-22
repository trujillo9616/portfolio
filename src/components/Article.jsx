import React from 'react'
import moment from 'moment'

const Article = ({ article }) => {
  const { title, image_url, published_at, url } = article

  return (
    <div className='list_inner'>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <div className='image' >
          <img src='/img/placeholders/4-3.jpg' alt='thumb' />
          <div
            className='main'
            style={{
              backgroundImage: `url(${image_url})`,
            }}
          ></div>
        </div>

        <div className='details'>
          <h3 className='title'>
            {title}
          </h3>
          <p className='date'>
            By Adrian Trujillo <span>{moment(published_at).format('ll')}</span>
          </p>
        </div>
      </a>
    </div>
  )
}

export default Article
