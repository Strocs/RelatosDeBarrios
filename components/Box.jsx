import "../styles/Box.css"

export const Box = ({onClick, data, className = "", title = "", subTitle = ""}) => {
	return (
		<div onClick={() => typeof onClick === 'function' ? onClick(data) : null} className={`box ${className}__box`}>
			<div className={`box__name ${className}__box-name`}>
				<h2 className={`box__title ${className}__box-title`}>{title}</h2>
				<h3 className={`box__subTitle ${className}__box-subtitle`}>{subTitle}</h3>
			</div>
		</div>
	)
}
