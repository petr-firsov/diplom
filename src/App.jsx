import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
