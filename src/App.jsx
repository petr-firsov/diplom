import './App.css'
import App from './components/StaticPage';
import Homepage from './components/Homepage/Homepage'
import { createBrowserRouter } from 'react-router'

export const app = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Homepage}
    ]
  }
]);