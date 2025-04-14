import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { app } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={app} />
)
