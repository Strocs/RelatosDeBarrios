import { Nav } from "./components/0_nav/Nav"
import { Header } from "./components/1_header/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/6_footer/Footer"
import { Gallery } from "./components/7_gallery/Gallery"
import { useState } from "react"

export const RelatosWeb = () => {
	const [showGallery, setShowGallery] = useState(false)
	const [sliderData, setSliderData] = useState([])

	const toggleGallery = (data) => {
		setSliderData(data)
		setShowGallery(!showGallery)
	}

	return (
		<>
			<Nav />
			{showGallery && <Gallery toggleGallery={toggleGallery} state={showGallery} data={sliderData} />}
			<Header />
			<Main toggleGallery={toggleGallery} />
			<Footer />
		</>
	)
}
