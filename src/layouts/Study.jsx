import Navbar from "../components/Navbar"
import Book from "../components/study/Book"
import Welcome from "../components/study/Welcome"
import Footer from '../components/Footer'

const Study = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Book/>
        <Footer/>
    </div>
  )
}

export default Study