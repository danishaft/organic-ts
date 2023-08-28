import { useState } from "react"
import { Link } from "react-router-dom"
import  styles from './Header.module.scss'
import Logo from '../../assets/images/Logo.png'
// "this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
function Header() {
    const [navState, setNavState] = useState(false)
    
  return (
    <header>
        <div className={styles.header}>
            <button className={`${styles.menu} ${navState ? styles.opened : ''}`} onClick={() => {setNavState(!navState)}}  aria-label="Main Menu">
                    <svg viewBox="0 0 100 100">
                        <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                        <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
            </button>
            <span className={styles.header__logo}>
                <img src={Logo} alt="logo" />
            </span>
        </div>
        <nav className={`${styles.header__nav} ${!navState ? styles.closed : '' }`}>
                <ul role="list" className={styles.list__group}>
                    <li role="list"><Link to={"/"}>Home</Link></li>
                    <li role="list"><Link to={"/about"}>About</Link></li>
                    <li role="list" className={styles.page}>Pages
                        <ul role="list">
                            <li role="list"><Link to={"/service"}>Service</Link></li>
                            <li role="list"><Link to={"/portfolio"}>Portfolio</Link></li>
                            <li role="list"><Link to={"/Team"}>Team</Link></li>
                        </ul>
                    </li>
                    <li role="list"><Link to={"/shop"}>Shop</Link></li>
                    <li role="list"><Link to={"/news"}>News</Link></li>
                    <li role="list"><Link to={"/signup"}>SignUp</Link></li>
                </ul>
            </nav>
    </header>
  )
}

export default Header