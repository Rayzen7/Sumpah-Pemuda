import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./layouts/Home"
import History from "./layouts/History"
import ScrollTop from "./components/ScrollTop"
import Study from "./layouts/Study"
import Contacts from "./layouts/Contacts"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <ScrollTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sejarah" element={<History/>}/>
                <Route path="/belajar" element={<Study/>}/>
                <Route path="/kontak" element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router