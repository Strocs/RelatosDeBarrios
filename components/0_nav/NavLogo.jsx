import Logo from '../../assets/icons/logo.svg'
import '../../styles/0_nav/NavLogo.css'

export const NavLogo = () => {
  const goTop = () => {
    window.scrollTo({top: 0})
  }

  return (
    <a className="nav__logo" onClick={goTop} >
      <Logo />
    </a>
  )
}