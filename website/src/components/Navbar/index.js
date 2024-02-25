import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoName from '../../assets/mylogos/FullNameBlackOnWhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
  <div className='nav-bar'>
    <Link className="logo" to={'/'}>
      <img className={'logoName'} src={LogoName} alt="fullname" />
    </Link>

    <nav>
      <NavLink exact={"true"} activeClassName={'active'} to={"/"} data-text={"HOME"}>
        <FontAwesomeIcon icon={faHome} color = "#FFFFFF" />
      </NavLink>

      <NavLink exact={"true"} activeClassName={'active'} className="about-link" to={"/about"} data-text={"ABOUT"}>
        <FontAwesomeIcon icon={faUser} color = "#FFFFFF" />
      </NavLink>

      <NavLink exact={"true"} activeClassName={'active'} className="contact-link" to={"/contact"} data-text={"CONTACT"}>
        <FontAwesomeIcon icon={faEnvelope} color = "#FFFFFF" />
      </NavLink>
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
  </div>
)

export default Navbar