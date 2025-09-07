import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Play from './pages/play'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/play' element={<Play />} />
      </Routes>
    </Router>
  )
}

export default App