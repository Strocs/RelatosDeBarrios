import '../../styles/nav/NavMenuList.css'

export const NavMenuList = ({section}) => {
  return (
    <li className="nav__menu-section">
      <a href={`#${section}`}>{section}</a>
    </li>
  )
}