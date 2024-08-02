
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

import { Adjara } from "./pages/georgia/Adjara"
import { Mtskheta } from "./pages/georgia/Mtskheta"
import { Racha } from "./pages/georgia/Racha"
import { Samtskhe } from "./pages/georgia/samtskhe-javakheti"
import {Notfound} from ".././components/notfound"





function App() {


  return (
    <>
    <NavbarBs />
    <section className="section">
    <Routes >
<Route path="/homepage" element={<Home />} />
<Route path="/About" element={<About/>} />
<Route path="/Taste" element={<Taste  />} />
 {/* <Route path="/Georgia" element = {<Georgia />} /> */}

<Route path="Svaneti" element={<Svaneti/>} />
<Route path="Qartli"  element ={<Qartli />}/>
<Route path="Mtkheta" element={<Mtkheta />} />
<Route path="Samegrelo" element={<Samegrelo />} />
<Route path="Khaxeti"  element={<Khaxeti/>}/>

<Route path="Adjara"  element={<Adjara/>}/>
<Route path="Mtskheta"  element={<Mtskheta/>}/>
<Route path="Racha"  element={<Racha/>}/>
<Route path="samtskhe-javakheti"  element={<Samtskhe/>}/>
<Route path="*"  element={<Notfound/>}/>
    </Routes>
    </section>
    <Footer />

</>

    
    
  )
}
export default App
