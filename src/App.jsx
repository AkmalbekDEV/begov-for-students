import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Even09 from './pages/Even09'
import Even11 from './pages/Even11'
import Even16 from './pages/Even16'
import Odd10 from './pages/Odd10'
import Odd14 from './pages/Odd14'
import Odd16 from './pages/Odd16'
import Even14 from './pages/Even14'
import Odd17 from './pages/Odd17'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/even9' element={<Even09 />} />
        <Route path='/even11' element={<Even11 />} />
        <Route path='/even14' element={<Even14 />} />
        <Route path='/even16' element={<Even16 />} />
        <Route path='/odd10' element={<Odd10 />} />
        <Route path='/odd14' element={<Odd14 />} />
        <Route path='/odd16' element={<Odd16 />} />
        <Route path='/odd17' element={<Odd17 />} />
      </Routes>
    </div>
  )
}

export default App