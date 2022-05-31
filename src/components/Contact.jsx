import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID='service_portfolio'
const EMAILJS_PUBLICKEY='4bH1s0VeQXX1EH7dl'
const EMAILJS_TEMPLATE_ID='template_portfolio'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const sendFeedback = (serviceID, templateID, variables) => {
    emailjs.send(serviceID, templateID, variables, EMAILJS_PUBLICKEY)
      .then(res => {
        console.log('Email successfully sent!')
      })
      .catch(err => console.error('There has been an error!', err))
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    sendFeedback(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: data.name, message: data.message, reply_to: data.email })
    e.target.reset()
  }

  return (
    <>
      <form className='contact_form' onSubmit={handleSubmit(onSubmit)}>
        <div className='first'>
          <ul>
            <li>
              <input
                {...register('name', { required: true })}
                type='text'
                placeholder='Name'
              />
              {errors.name && errors.name.type === 'required' && (
                <span>Name is required</span>
              )}
            </li>
            {/* End first name field */}

            <li>
              <input
                {...register(
                  'email',
                  {
                    required: 'Email is Required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format'
                    }
                  },
                  { required: true }
                )}
                type='email'
                placeholder='Email'
              />
              {errors.email && <span role='alert'>{errors.email.message}</span>}
            </li>
            {/* End email name field */}

            <li>
              <textarea
                {...register('message', { required: true })}
                placeholder='Message'
              ></textarea>
              {errors.subject && <span>Subject is required.</span>}
            </li>
            {/* End subject  field */}
          </ul>
        </div>

        <div className='tokyo_tm_button'>
          <button type='submit' className='white-fill-bg fill-black'>
            Send Message
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  )
}

export default Contact
