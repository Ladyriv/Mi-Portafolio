
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBarEx from './layouts/Navbar';
import AllPagesPDFViewer from "./components/Docums";
import samplePDF from "./assets/docs/CV-LeidyRivera.pdf";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBarEx />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />

          <Route path='*' element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
