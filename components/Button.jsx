import '../styles/Button.css'

export const Button = ({className = '', text = '', href = ''}) => {
  return (
    <a href={href} target="_blank" className={`btn ${className}`}>
      <p>{text}</p>
    </a>
  )
}
