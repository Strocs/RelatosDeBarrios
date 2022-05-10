import '../styles/button.css'

export const Button = ({className = '', text = '', href = ''}) => {
  return (
    <button href={href} className={`btn ${className}`}>
      <p>{text}</p>
    </button>
  )
}
