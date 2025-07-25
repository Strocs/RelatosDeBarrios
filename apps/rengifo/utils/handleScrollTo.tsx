interface UseScrollToProps {
  to: string
}

export const handleScrollTo = ({ to }: UseScrollToProps) => {
  const element = document.querySelector(to)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
