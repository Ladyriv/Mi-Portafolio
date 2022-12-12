
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBarEx from './layouts/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<NavBarEx />}>
          <Route path='Home' element={<Home />}/>
          <Route path='Projects' element={<Projects />}/>
          <Route path='Contact' element={<Contact />}/>

          <Route path='*' element={<Navigate replace to="/" />}/>

        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
