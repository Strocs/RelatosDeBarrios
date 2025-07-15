export const Footer = () => {
  return (
    <footer className='container mx-auto w-fit py-8 text-center'>
      <p className='text-sm text-gray-600'>
        © {new Date().getFullYear()} Relatos de Barrios. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}
