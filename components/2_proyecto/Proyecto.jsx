import "../../styles/2_proyecto/Proyecto.css"
import { Team } from "./Team"
import { Title } from "../Title"

import { TEAM_LIST, COLAB_LIST } from "../../data/team.data"

export const Proyecto = () => {
	return (
		<section id="El Proyecto" className="proyecto">
			<div className="wrappers proyecto__container">
				<div className="proyecto__description">
					<Title className={"proyecto__title"} title={"El Proyecto"} />
					<h3 className="proyecto__subTitle">
						¿Qué <br /> queremos hacer?
					</h3>
					<p className="proyecto__text">
						El proyecto busca promover y rescatar el valor patrimonial e histórico de los barrios y conjuntos habitacionales de conservación histórica, ligados al patrimonio industrial, destacando la
						experiencia social y patrimonial detrás de la vida de sus habitantes, la dimensión comunitaria que generan estos espacios, y los aspectos esenciales que existen dentro de su construcción y
						diseño arquitectónico.
					</p>
				</div>
					<div className="proyecto__team">
						<Team name={"Equipo"} teamList={TEAM_LIST} />
						<Team name={"Colaboradores"} teamList={COLAB_LIST} />
					</div>
			</div>
		</section>
	)
}
