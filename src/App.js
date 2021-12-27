import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
