import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faReact, faRust, faUnity } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () =>{
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => clearTimeout(timer);
  }, [])

  return(
    <>
    <div className={'container about-page'}>
      <div className={'text-zone'}>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o','u','t',' ','m','e']} idx={15} />
        </h1>
        <p>I'm Alex Agosto, a dedicated software engineering student from Puerto Rico, eagerly anticipating my graduation in December 2024.
          With a strong foundation in software development principles, I'm on the lookout for both internship and full-time opportunities where
          I can further refine my skills. My goal is to contribute meaningfully to projects that not only challenge me but also allow me to apply
          my knowledge in new and diverse areas of the workforce.</p>
        <p>I hold a fervent passion for programming, and have tried my hand in various areas of it. Among them, game and web application development
        are the ones that have captivated my interest and much of my time. Beyond my primary interests, I've worked with and learnt of database management
        and machine learning both through personal projects and some university assignments. I've also started learning Rust and have loved it up to now,
        so I'm thinking of incorporating it into a couple upcoming projects.</p>
        <p>Outside of technology, I find joy in playing musical instruments, painting/drawing, and immersing myself in the process of learning a language,
          with German being my current endeavour. These hobbies not only bring me happiness; they also lead to some of my more interesting ideas for projects.
          I'm excited to share some of my recent paintings in the "Paintings" section of my profile. I would love to hear your thoughts about them, so feel
          free to take a look!</p>
      </div>

      <div className={'stage-cube-cont'}>
        <div className={'cube-spinner'}>
          <div className={'face1'}><FontAwesomeIcon icon={faHtml5} color='#f16428' /></div>
          <div className={'face2'}><FontAwesomeIcon icon={faReact} color='#149eca' /></div>
          <div className={'face3'}><FontAwesomeIcon icon={faJs} color='#f0dc4e' /></div>
          <div className={'face4'}><FontAwesomeIcon icon={faUnity} color='#222c36' /></div>
          <div className={'face5'}><FontAwesomeIcon icon={faRust} color='#000000' /></div>
          <div className={'face6'}><FontAwesomeIcon icon={faDatabase} color='#FFFFFF' /></div>
        </div>
      </div>
    </div>

    <Loader type={"ball-scale-ripple-multiple"} />
    </>
  )
}

export default About