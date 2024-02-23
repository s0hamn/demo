
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
