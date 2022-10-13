import '../../styles/0_nav/NavLogo.css'

export const NavLogo = () => {
  const goTop = () => {
    window.scrollTo({top: 0})
  }

  return (
    <a className="nav__logo" onClick={goTop} >
      <img src="/logo.svg" alt="Logotipo de Relatos de Barrios" />
    </a>
  )
}