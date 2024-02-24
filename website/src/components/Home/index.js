import './index.scss'
import Acronym from '../../assets/mylogos/NameTerminalBlack.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const helloArray = ['H', 'e', 'l', 'l', 'o', '!', ' ', 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's']
  /* Im probably gonna have to divide them into more arrays because of the linebreaks. I left off at 35:30 on vid.*/
  const jobArray = ['a', ' ', 'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

  return(
    <div className={"container home-page"}>
      <div className={"text-area"}>
        <h1>Hello! <br /> My name is
          <br />
          <img src={Acronym} alt={'developer'} />
          <br />
          a Software Engineer.
        </h1>

        <h2> Frontend and Database Developer. <br /> Machine Learning and GameDev Enthusiast.</h2>
        <Link to={"/contact"} className={"flat-button"}>Contact Me</Link>
      </div>
    </div>
  );
}

export default Home