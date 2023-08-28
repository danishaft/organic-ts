import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import './Lorenzo.scss'
import banner from '../../assets/images/markus-clemens-E60dFgS_X8g-unsplash.jpg'
function HomePage() {
  return (
    <>
    <div className="header">
      <span className="header__left">
        Renowned Psychic Medium Mara Amelia 203 676 6823 | maraamelia@gmail.com
      </span>
      <span className="header__right">
        <span>
        <FaFacebookF className="icon"/>
        </span>
        <span>
        <FaTwitter className="icon"/>
        </span>
        <span>
        <FaLinkedinIn className="icon"/>
        </span>
      </span>
    </div>
    <div className="hero">
      <h1>Mara Amelia</h1>
      <p>Psychic Medium</p>
    </div>
    <nav className="navbar">
      <ul>
        <li className="active">Mara Amelia</li>
        <li>Readings</li>
        <li>Reviews</li>
        <li>Code of Ethics</li>
        <li>Book Now</li>
        <li>Policy</li>
        <li>Contacts</li>
        <li>Partners</li>
      </ul>
    </nav>
    <div className="banner">
      <img src={banner} alt="" />
      <div className="overlay">
        <h3>Your Connection to the other Side</h3>
        <p>Communicating Beyond the Veil</p>
      </div>
    </div>
    <footer>
    <h2>Mara Amelia</h2>
      <h3>Renowned Psychic Medium and Cold Case Liaison</h3>
    </footer>
    </>
  )
}

export default HomePage