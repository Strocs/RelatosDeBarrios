import "../../styles/descubre/Descubre.css"
import { Title } from "../Title"

import windowLeft from '../../assets/ventana1.png'
import windowRight from '../../assets/ventana2.png'
import { Button } from "../Button"
import { Box } from "../Box"

export const Descubre = () => {
	return (
		<section id="Libro / Documental" className="descubre">
			<div className="wrappers descubre__container">

				<div className="descubre__title-wrapper">
          <Title className="descubre__title" title="Descubre" subTitle="Relatos de Barrios" br={true} />
					<div className="subBars descubre__subBar"></div>
				</div>

				<div className="descubre__content">
            <Box className="libro" title="Libro" subTitle="Descárgalo Aquí" />
            <Box className="docu" title="Documental" subTitle="Míralo Aquí" />
				</div>
			</div>
		</section>
	)
}
