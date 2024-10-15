import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import AddCSS from './components/css/basic_css_add.jsx'
import FastCard from './components/card/fastCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* <AddCSS /> */}
  <FastCard />

  </StrictMode>,
)
