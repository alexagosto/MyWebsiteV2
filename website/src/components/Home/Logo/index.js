import './index.scss'
import LogoS from '../../../assets/mylogos/AcronymFillBlack.png'
const Logo = () => {
  return(
    <div className="logo-container">
      <img className={'solid-logo'} src={LogoS} alt={'Acronym'} />
    </div>
  )
}

export default Logo