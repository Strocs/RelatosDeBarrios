import { Parallax } from "react-scroll-parallax"

import { Title } from "../Title"
import { Button } from "../Button"

import "../../styles/1_header/Header.css"

import { libro, docu } from "../../data/Libro-Docu.data"
import video from "../../assets/videos/teaser.mp4"
import headerImg from '../../assets/headerCasas.png'

export const Header = () => {
	return (
		<header id="inicio" className="header">
			<Parallax speed={-30} className="header__container">
				<div className="title__container">
					<Title className={"header__title"} title={"Imaginario Urbano,"} subTitle={" Imaginario Barrial"} br={true} />
				</div>
				<div className="btn__container">
					<Button text="Ver Libro" href={libro} />
					<Button text="Ver Documental" href={docu} />
				</div>
			</Parallax>

			<video loop muted autoPlay preload="true" className="header__video">
				<source src={video} type="video/mp4" />
			</video>

			<div className="header__image">
				<img src={headerImg} alt=""/>
			</div>
		</header>
	)
}
