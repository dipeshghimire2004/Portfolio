import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, createBrowserRouter} from 'react-router-dom'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   }
// ])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
