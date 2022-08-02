import React from 'react'

const Skill = ({ skill }) => {
  return (
      <div className='skill' style={{
        display: 'flex',
        alignItems: 'baseLine',
        justifyContent: 'flex-start',
        alignContent: 'center',
      }}>
        <div className='skill_name'>
          <span>{skill}</span>
        </div>
      </div>
  )
}

export default Skill