import './index.scss'
import LogoS from '../../../assets/mylogos/AcronymFillBlack.png'
import {useRef } from 'react'
const Logo = () => {

  const bgRef = useRef();
  const solidLogoRef = useRef();

  return(
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className={'solid-logo'} src={LogoS} alt={'Acronym'} />
    </div>
  )
}

export default Logo