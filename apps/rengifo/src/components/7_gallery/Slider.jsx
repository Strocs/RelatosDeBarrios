import { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

import '../../styles/7_gallery/Slider.css'

export const Slider = ({ data }) => {
	const [current, setCurrent] = useState(0)
	const [touchStart, setTouchStart] = useState(null)
	const [touchEnd, setTouchEnd] = useState(null)

	const length = data.length
	const next = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}
	const previous = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	const minSwipeDistance = 50
	const onTouchStart = (e) => {
		setTouchEnd(null)
		setTouchStart(e.targetTouches[0].clientX)
	}
	const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > minSwipeDistance
		const isRightSwipe = distance < -minSwipeDistance
		if (isLeftSwipe || isRightSwipe) isLeftSwipe ? next() : previous()
	}

	return (
		<div className="slider__container">
			<FaAngleLeft className="previous__arrow" onClick={previous} />
			<FaAngleRight className="next__arrow" onClick={next} />

			<div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="slider__image-list">
				{data.map((item, index) => {
					return (
						<div className={index === current ? "slide active" : "slide"} key={index}>
							{index === current && <img className="slider__image" src={item.src} alt={item.name} />}
						</div>
					)
				})}
			</div>
      <div className="slider__ball-list">
					{data.map((item, index) => {
						return <div className={index === current ? "slider__ball ball__active" : "slider__ball"} key={index}></div>
					})}
				</div>
		</div>
	)
}
