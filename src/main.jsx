import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Route/Router.jsx'
import AuthenPro from "./ProViderr/AuthenPro.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenPro>
<RouterProvider router={router} />
    </AuthenPro>
    
  </StrictMode>,
)
