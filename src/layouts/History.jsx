import About from "../components/sejarah/About"
import Header from "../components/sejarah/Header"
import NavbarHistory from "../components/sejarah/NavbarHistory"
import Welcome from "../components/sejarah/Welcome"
import Footer from '../components/Footer'
import Galery from "../components/sejarah/Galery"
import Char from "../components/sejarah/Char"

const History = () => {
  return (
    <div>
        <NavbarHistory/>
        <Welcome/>
        <Header/>
        <About/>
        <Char/>
        <Galery/>
        <Footer/>
    </div>
  )
}

export default History