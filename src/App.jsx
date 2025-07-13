import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Homepage from './components/Homepage/Homepage';
import SearchResults from './components/SearchResults/SearchResults';

const app = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        element: <SearchResults />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={app} />
  )
};