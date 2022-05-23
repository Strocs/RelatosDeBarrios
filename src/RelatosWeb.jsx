import {Nav} from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Main } from './components/Main'
import { Footer } from './components/footer/Footer'
import { Gallery } from './components/gallery/Gallery'
import { useState } from 'react'

export const RelatosWeb = () => {
  const [showGallery, setShowGallery] = useState(false)

  const toggleGallery = () => {
    setShowGallery(!showGallery)
    // console.log('gallery showed');
  }

  return (
    <>
      <Nav />
      <Header />
      {showGallery && <Gallery toggleGallery={toggleGallery} state={showGallery} />}
      <Main toggleGallery={toggleGallery} />
      <Footer />
    </>
  )
}
