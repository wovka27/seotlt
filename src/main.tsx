import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/seotlt">
    <App />
  </BrowserRouter>
)
