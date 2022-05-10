import '../styles/Title.css'

export const Title = ({className = '', title = ''}) => {
  return (
    <h1 className={` title ${className}`}>{title}</h1>
  )
}
