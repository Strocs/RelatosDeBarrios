import "../../styles/imaginario/Imaginario.css"
import { Box } from "../Box"

import { Title } from "../Title"

export const Imaginario = ({toggleGallery}) => {
	return (
		<section className="imaginario">
			<div className="imaginario__img"></div>

			<div id="Archivo Fotográfico" className="wrappers imaginario__container">
				<div className="imaginario__title-wrapper">
					<Title className={"imaginario__title"} title={"Imaginario Urbano"} subTitle={"Imaginario Barrial"} br={true} />
					<div className="subBars imaginario__subBar"></div>
				</div>

				<div className="imaginario__content">
					<div className="imaginario__fotos">
						<Box onClick={toggleGallery} className={"archivo"} title={"Archivo"} subTitle={"Fotográfico"} />
						<Box onClick={toggleGallery} className={"actividades"} title={"Fotografías"} subTitle={"Actividades"} />
						<Box onClick={toggleGallery} className={"aereas"} title={"Fotografías"} subTitle={"Aéreas"} />
					</div>

					<div className="imaginario__3d">
						<a target="_blank" href="">
							<Box className={"exterior"} title={"Recorrido 3D"} subTitle={"Exterior"} />
						</a>
						<a target="_blank" href="">
							<Box className={"interior"} title={"Recorrido 3D"} subTitle={"Interior"} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
