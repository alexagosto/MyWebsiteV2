import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoName from '../../assets/mylogos/FullNameBlackOnWhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faPaintBrush, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>

      <Link className="logo" to={'/'}>
        <img className={'logoName'} src={LogoName} alt="fullname" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact={"true"} activeClassName={'active'} to={"/"} onClick={() => setShowNav(false)} data-text={"HOME"}>
          <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
        </NavLink>

        <NavLink exact={"true"} activeClassName={'active'} onClick={() => setShowNav(false)} className="about-link" to={"/about"} data-text={"ABOUT"}>
          <FontAwesomeIcon icon={faUser} color="#FFFFFF" />
        </NavLink>

        <NavLink exact={"true"} activeClassName={'active'} onClick={() => setShowNav(false)} className="contact-link" to={"/contact"}
                 data-text={"CONTACT"}>
          <FontAwesomeIcon icon={faEnvelope} color="#FFFFFF" />
        </NavLink>

        <NavLink exact={"true"} activeClassName={'active'} onClick={() => setShowNav(false)} className="contact-link" to={"/paintings"}
                 data-text={"PAINTINGS"}>
          <FontAwesomeIcon icon={faPaintBrush} color="#FFFFFF" />
        </NavLink>

        <FontAwesomeIcon icon={faClose} color={'#FFFFFF'} size={'3x'} className={'close-icon'} onClick={() => setShowNav(false)} />
      </nav>

      <ul>
        <li>
          <a target={"_blank"} rel={"noreferrer"} href={"https://www.linkedin.com/in/alex-agosto/"}>
            <FontAwesomeIcon icon={faLinkedin} color="#FFFFFF" />
          </a>
        </li>

        <li>
          <a target={"_blank"} rel={"noreferrer"} href={"https://github.com/alexagosto"}>
            <FontAwesomeIcon icon={faGithub} color="#FFFFFF" />
          </a>
        </li>

        <li>
          <a target={"_blank"} rel={"noreferrer"} href={"https://www.instagram.com/alex__augustus/"}>
            <FontAwesomeIcon icon={faInstagram} color="#FFFFFF" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} color={'#FFFFFF'} onClick={() => setShowNav(true)} size={'3x'} className={'hamburger'} />
    </div>
  )
}
export default Navbar