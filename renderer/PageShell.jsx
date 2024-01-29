import React from 'react'
import './styles/index.css'
import { PageContextProvider } from './usePageContext'
import { ParallaxProvider } from 'react-scroll-parallax'
import { RelatosWeb } from './RelatosWeb'

export { PageShell }

function PageShell({ pageContext, children }) {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<ParallaxProvider>
					<RelatosWeb />
				</ParallaxProvider>
			</PageContextProvider>
		</React.StrictMode>
	)
}
