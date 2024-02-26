import './index.scss'
import Acronym from '../../assets/mylogos/NameTerminalBlack.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const helloArray = ['H', 'e', 'l', 'l', 'o', '!']
  const myNameArray= ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's']
  const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  const downloadResume = () =>{
   const link = document.createElement('a');
   link.href = '/AlexAgostoResume.pdf';
   link.download = 'AlexAgostoResume.pdf';
   document.body.appendChild(link);
   link.click()
    document.body.removeChild(link);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return(
    <>
    <div className={"container home-page"}>
      <div className={'text-area'}>
        <h1><AnimatedLetters letterClass={letterClass} strArray={helloArray} idx={15} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={myNameArray} idx={21} /> <br />
          <img src={Acronym} alt={'developer'} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={31} />
        </h1>

        <h2> Frontend and Database Developer. <br /> Machine Learning and GameDev Enthusiast.</h2>
        <Link to={'/contact'} className={'flat-button'}>Contact Me</Link>
        <h2 className={'resume-text'}>Download my resume below:</h2>
        <button onClick={downloadResume} className={'flat-button-resume'}>Download</button>
      </div>
      <Logo />
    </div>
      <Loader type={'ball-scale-ripple-multiple'} active />
    </>
  );
}

export default Home