
import { useTransition, animated } from "react-spring"


import { PLANI_IMG_DATA } from "../../data/gallery/domestico.data"

import { Slider } from "./slider"
import "../../styles/Gallery.css"

export const Gallery = ({toggleGallery, state, data}) => {


	const transition = useTransition(state, {
		from: { opacity: 0, marginTop: 0 },
		enter: { opacity: 1, marginTop: 0 },
		delay: 20,
	})

	return (
		<>
			{transition(
				(style, item) =>
					item && (
						<animated.div className="gallery" style={style}>
							<div className="gallery__container">
								<span onClick={() => toggleGallery()} className="gallery__close">&#10006;</span>
								<Slider data={PLANI_IMG_DATA} />

							</div>
						</animated.div>
					)
			)}
		</>
	)
}
