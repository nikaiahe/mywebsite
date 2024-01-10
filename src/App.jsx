import './App.css'
import NavigationBar from './NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import More from './pages/More';
import Stuff from './pages/Stuff';

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
        <Route path="/More" element={<More />} />
        <Route path="/Stuff" element={<Stuff />} />
        </Routes>
        {/* </NavigationBar> */}
      </div>
    </HashRouter>

    </>
  )
}

export default App
