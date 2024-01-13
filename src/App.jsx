import './App.css'
import NavigationBar from './NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { Routes, Route, HashRouter } from "react-router-dom";


function App() {

  return (
    <>

  <NavigationBar/>
    

    <HashRouter>
      <div id ="content">
        

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* </NavigationBar> */}
      </div>
    </HashRouter>

    </>
  )
}

export default App
