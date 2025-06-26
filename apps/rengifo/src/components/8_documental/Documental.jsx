import React from "react"
import "../../styles/08_documental/Documental.css"

export const Documental = ({ embedId }) => {
	return (
		// <div className="documental__container">
			<div className="video-responsive">
				<iframe
					src={`https://www.youtube.com/embed/${embedId}?fs=1`}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
				/>
			</div>
		// </div>
	)
}
