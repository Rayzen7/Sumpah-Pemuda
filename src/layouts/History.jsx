import About from "../components/sejarah/About"
import Header from "../components/sejarah/Header"
import NavbarHistory from "../components/sejarah/NavbarHistory"
import Welcome from "../components/sejarah/Welcome"
import Footer from '../components/Footer'
import Galery from "../components/sejarah/Galery"

const History = () => {
  return (
    <div>
        <NavbarHistory/>
        <Welcome/>
        <Header/>
        <About/>
        <Galery/>
        <Footer/>
    </div>
  )
}

export default History