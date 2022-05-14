import { Parallax } from 'react-scroll-parallax'

import { Title } from '../Title'
import { Button } from '../Button'

import '../../styles/header/Header.css'

import video from '../../assets/videos/teaser.mp4'

export const Header = () => {
  return (
    <header id="inicio" className="header">

      <Parallax speed={-20} className="header__container">
        <div className="title__container">
          <Title className={'header__title'} title={'Imaginario Urbano,'} subTitle={' Imaginario Barrial'} br={true} />
        </div>
        <div className="btn__container">
          <Button text='Ver Libro' />
          <Button text='Ver Documental' />
        </div>
      </Parallax>

      <video 
        loop 
        muted 
        autoPlay 
        preload='true' 
        className="header__video" >
				<source src={video} type="video/mp4" />
			</video>   

      <div className="header__img">
      </div>
    </header>
  )
}
