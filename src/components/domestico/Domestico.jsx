import { Box } from "../Box"
import { Title } from "../Title"


import "../../styles/domestico/Domestico.css"

export const Domestico = () => {
	return (
		<section id="Planimetrías" className="domestico">

			<div className="wrappers domestico__container">
				
				<div className="domestico__title-wrapper">
					<Title className="domestico__title" title="Arquitectura de lo doméstico" />
					<div className="subBars domestico__subBar"></div>
				</div>

				<div className="domestico__content">
					<p className="domestico__text">
						Recopilación de las planimetrías y documentos físicos originales correspondientes al proyecto “Casas para obreros CCU, La Serena” posteriormente denominado como “Conjunto Habitacional
						Rengifo”, diseñado en 1957 por el arquitecto Carlos Feuereisen Polanco, y construido en el año 1958 por Negochea y Vergara. <br />
						<br /> El proyecto se ubica en el norte de la zona típica de La Serena y es de una tipología característica de la vivienda en la ciudad. Representa el estilo del Plan Serena a pesar de ser
						posterior (1958) y denota la intención de consolidar la ciudad con edificios de vivienda.
					</p>

					<Box className={"plani"} title={"Planimetrías"} subTitle={"Originales"} />
					<Box className={"levan"} title={"Levantamiento"} subTitle={"Digital"} />
				</div>
			</div>
		</section>
	)
}
