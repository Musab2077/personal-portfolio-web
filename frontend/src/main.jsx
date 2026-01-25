import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Contact from './components/Contact.jsx';
import { BrowserRouter } from 'react-router-dom';
import NavBarConfig from './components/NavBarConfig.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes element={<NavBarConfig />}>
      <Route path='*' element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
