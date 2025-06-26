import '../styles/Title.css'

export const Title = ({className = '', title = '', subTitle = '', br = false}) => {
  return (
    <h1 className={` title ${className}`}>{title} {br ? <br/> : ''} <span>{subTitle}</span></h1>
  )
}
