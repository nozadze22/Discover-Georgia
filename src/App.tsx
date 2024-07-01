
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
// import { Georgia } from "./pages/Georgia"
import { About } from "./pages/About"
import {NavbarBs} from "../components/Navbar"
import { Svaneti } from "./pages/georgia/Svanei"
import Qartli from "./pages/georgia/qartli"
import { Mtkheta } from "./pages/georgia/mthketa"
import Samegrelo from "./pages/georgia/samegrelo"
import { Khaxeti } from "./pages/georgia/Khaxeti"
import  "./style/app.scss"
import { Taste } from "./pages/Taste"
import { Footer } from "../components/footer/footer"



function App() {


  return (
    <>
    <NavbarBs />
    <section className="section">
    <Routes >
<Route path="/" element={<Home />} />
<Route path="/About" element={<About/>} />
<Route path="/Taste" element={<Taste  />} />
 {/* <Route path="/Georgia" element = {<Georgia />} /> */}

<Route path="Svaneti" element={<Svaneti/>} />
<Route path="Qartli"  element ={<Qartli />}/>
<Route path="Mtkheta" element={<Mtkheta />} />
<Route path="Samegrelo" element={<Samegrelo />} />
<Route path="Khaxeti"  element={<Khaxeti/>}/>


    </Routes>
    </section>

<Footer />

  

   </>

    
    
  )
}
export default App
