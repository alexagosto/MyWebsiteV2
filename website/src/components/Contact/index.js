import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const contactArray=['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e', '!']
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'template_muk9q8u',
        refForm.current,
        'znYNAJH43Kdqw8G4j'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
    <div className={'container contact-page'}>
      <div className={'text-zone'}>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={15}/>
        </h1>
        <p>
          I'm interested in freelance and employment opportunities, especially ambitious projects with cutting edge technologies.
          However, if you have any requests or inquiries, don't hesitate to contact me using the form below.
        </p>
        <div className={'contact-form'}>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className={'half'}>
                <input type={'text'} name={'name'} placeholder={'Name'} required />
              </li>
              <li className={'half'}>
                <input type={'email'} name={'email'} placeholder={'Email'} required />
              </li>
              <li>
                <input placeholder={'Subject'} type={'text'} name={'subject'}  required />
              </li>
              <li>
                <textarea placeholder={'Message'} name={'message'} required/>
              </li>
              <li>
                <input type={'submit'} className={'flat-button'} value={'SEND'}/>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className={'info-map'}>
        Alex Y. Agosto Figueroa,
        <br/>
        Mayaguez, Puerto Rico, 00682
        <span>alexagosto@proton.me</span>
      </div>

      <div className={'map-wrap'}>
        <MapContainer center={[18.210569, -67.141228]} zoom={20}>
          <TileLayer url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
          <Marker position={[18.210569, -67.141228]}>
            <Popup>
              I'm currently studying here, Ill graduate by December 2024!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
      <Loader type={'ball-scale-ripple-multiple'} />
    </>
  )
}

export default Contact