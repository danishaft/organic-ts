import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./containers/Header/Header"
import HomePage from "./pages/Homepage/HomePage"
import About from "./pages/Aboutus/AboutUs"
import Service from "./pages/Service/Service"
import Portfolio from "./pages/Portfolio/Portfolio"
import Team from "./pages/Team/Team"
import Shop from "./pages/Shop/Shop"
import ShopSingle from "./pages/Shopsingle/ShopSingle"
import News from "./pages/News/News"
import SignUp from "./pages/Signup/SignUp"
import './assets/styles/style.scss'

function App() {
  return (
    <Router>
      <Header /> 
      <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/product/:productId" element={<ShopSingle/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/signup" element={<SignUp/>} /> 
      </Routes>
    </Router>
  )
}

export default App
