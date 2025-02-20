import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import Buttons from './Buttons.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Buttons count={5} />
  </StrictMode>,
  
)

