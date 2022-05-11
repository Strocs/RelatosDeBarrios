import '../../styles/Box.css'

export const Box = ({className, title, subTitle}) => {
	return (
		<div className={`box ${className}__box`}>
			<h2 className={`box-title ${className}__box-title`}>
				{title}
			</h2>
			<h3 className={`box-title ${className}__box-subtitle`}>{subTitle}</h3>
			<img className={`box-fondo ${className}__box-img`} src={`../../../public/images/${className}.jpg`} alt={title + subTitle} />
		</div>
	)
}
