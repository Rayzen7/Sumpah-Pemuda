import About from "../components/About"
import Footer from "../components/Footer"
import Information from "../components/Information"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <About/>
        <Information/>
        <Location/>
        <Footer/>
    </div>
  )
}

export default Home