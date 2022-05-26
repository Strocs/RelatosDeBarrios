import "../../styles/5_descubre/Descubre.css"
import { Title } from "../Title"

import { Box } from "../Box"
import {libro, docu} from '../../data/Libro-Docu.data'

export const Descubre = () => {

	return (
		<section id="Libro / Documental" className="descubre">
			<div className="wrappers descubre__container">
				<div className="descubre__title-wrapper">
					<Title className="descubre__title" title="Descubre" subTitle="Relatos de Barrios" br={true} />
					<div className="subBars descubre__subBar"></div>
				</div>

				<div className="descubre__content">
					<a href={libro} target="_blank">
						<Box className="libro" title="Libro" subTitle="Descárgalo Aquí" />
					</a>
					<a href={docu} target="_blank">
						<Box className="docu" title="Documental" subTitle="Míralo Aquí" />
					</a>
				</div>
			</div>
		</section>
	)
}
