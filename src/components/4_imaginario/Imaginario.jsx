import { Box } from "../Box"
import { Title } from "../Title"

import { ARCHIVO_IMG_DATA, ACTIV_IMG_DATA, AEREAS_IMG_DATA } from "../../data/gallery/imaginario.data"

import "../../styles/4_imaginario/Imaginario.css"

export const Imaginario = ({ toggleGallery }) => {
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
            <Box onClick={toggleGallery} data={ARCHIVO_IMG_DATA} className={"archivo"} title={"Archivo"} subTitle={"Fotográfico"} />
            <Box onClick={toggleGallery} data={ACTIV_IMG_DATA} className={"actividades"} title={"Fotografías"} subTitle={"Actividades"} />
            <Box onClick={toggleGallery} data={AEREAS_IMG_DATA} className={"aereas"} title={"Fotografías"} subTitle={"Aéreas"} />
          </div>

          <div className="imaginario__3d">
            <div>
              <Box className={"exterior"} title={"Recorrido 3D"} subTitle={"Exterior"} />
            </div>
            <div>
              <Box className={"interior"} title={"Recorrido 3D"} subTitle={"Interior"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
