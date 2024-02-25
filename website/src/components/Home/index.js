import './index.scss'
import Acronym from '../../assets/mylogos/NameTerminalBlack.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const helloArray = ['H', 'e', 'l', 'l', 'o', '!']
  const myNameArray= ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's']
  const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, [])

  return(
    <div className={"container home-page"}>
      <div className={"text-area"}>
        <h1> <AnimatedLetters letterClass={letterClass} strArray={helloArray} idx={15} /> <br />
          <AnimatedLetters letterClass={letterClass} strArray={myNameArray} idx={21} /> <br />
          <img src={Acronym} alt={'developer'} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={31} />
        </h1>

        <h2> Frontend and Database Developer. <br /> Machine Learning and GameDev Enthusiast.</h2>
        <Link to={"/contact"} className={"flat-button"}>Contact Me</Link>
      </div>

      <Logo />
    </div>
  );
}

export default Home