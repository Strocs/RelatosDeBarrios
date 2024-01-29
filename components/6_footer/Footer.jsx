import { IconContext } from "react-icons";
import { FaInstagram, FaFacebookSquare, FaEnvelope } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import Logo from '../../assets/icons/logo.svg'
import { logos } from '../../data/logos.data'

import "../../styles/6_footer/Footer.css"

export const Footer = () => {

	return (

		<footer className="footer">

			<div className="wrappers footer__container">
        <Logo />

				<div className="footer__content">

					<div className="footer__logos">
            {logos.map((logo, index) =>  
              <img src={logo.src} alt={logo.alt} key={index}/>
            )}
					</div>

					<div className="footer__info">

						<p className="info__text">
							Relatos de Barrios 2022 - Universidad de La Serena<br/>Desarrollado con <span> &hearts; </span> por {" "}
							<a target="_blank" href="https://github.com/Strocs">
								_Strocs
							</a>
						</p>

						<div className="info__rrss">
              <IconContext.Provider value={{color: "white", size: "3rem"}}>
							  <a href="https://www.youtube.com/channel/UChyh4l-EFiNCeIs3K33nz_Q">
                  <IoLogoYoutube />
							  </a>
							  <a href="mailto:relatosdebarrio.ls@gmail.com?subject=Consulta Relatos de Barrios">
                  <FaEnvelope />
							  </a>
							  <a href="https://www.instagram.com/relatosdebarrios/">
                  <FaInstagram />
							  </a>
							  <a href="https://www.facebook.com/Relatos-de-Barrios-101242745453386/">
                  <FaFacebookSquare />
							  </a>
              </IconContext.Provider>
						</div>

					</div>
				</div>
			</div>
		</footer>
	)
}
