import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Basic_Css from './assets/Components/css/basic_css_add'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Basic_Css />
  </StrictMode>,
)

