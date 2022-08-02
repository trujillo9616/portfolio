import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useSnackbar } from 'notistack'

const EMAILJS_SERVICE_ID = 'service_portfolio'
const EMAILJS_PUBLICKEY = '4bH1s0VeQXX1EH7dl'
const EMAILJS_TEMPLATE_ID = 'template_portfolio'

const Contact = ({ toggleModal }) => {
  const { enqueueSnackbar } = useSnackbar()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const sendFeedback = (serviceID, templateID, variables) => {
    emailjs.send(serviceID, templateID, variables, EMAILJS_PUBLICKEY)
      .then(res => {
        enqueueSnackbar('Message sent! I\'ll get in touch soon!', { variant: 'success' })
      })
      .catch(err => {
        enqueueSnackbar('Message failed to send.', { variant: 'error' })
      })
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    toggleModal()
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

            <li>
              <textarea
                {...register('message', { required: true })}
                placeholder='Message'
              />
              {errors.subject && <span>Subject is required.</span>}
            </li>
          </ul>
        </div>

        <div className='tokyo_tm_button'>
          <button type='submit' className='white-fill-bg fill-black'>
            Send Message
          </button>
        </div>
      </form>
    </>
  )
}

export default Contact
