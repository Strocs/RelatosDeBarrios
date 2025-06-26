import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';
import { RelatosWeb } from './RelatosWeb';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RelatosWeb />
    </ParallaxProvider>
  </React.StrictMode>
)
