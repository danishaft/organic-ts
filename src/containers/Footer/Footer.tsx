import styles from "./Footer.module.scss"
import logo from "../../assets/images/Logo.png"
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoPinterest } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
function Footer() {
  return (
    <footer>
        <div className={styles.contact}>
            <h1><b>Contact Us</b></h1>
            <ul>
                <li>
                    <p className={styles.contact__title}><b>Email</b></p>
                    <p>helpout@outlook.com</p>
                </li>
                <li>
                    <p className={styles.contact__title}><b>Phone</b></p>
                    <p>222 444 8888</p>
                </li>
                <li>
                    <p className={styles.contact__title}><b>Address</b></p>
                    <p>No 1, chicargo street, USA</p>
                </li>
            </ul>
        </div>
        <div className={styles.about}>
            <img src={logo} alt="Logo" />
            <p>Simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum simply dummy text of the printing 
            </p>
            <div className={styles.socials}>
                <div><AiOutlineInstagram/></div>
                <div><BiLogoFacebookCircle/></div>
                <div><BiLogoTwitter/></div>
                <div><BiLogoPinterest/></div>
            </div>
        </div>
        <div className={styles.utility}>
            <h1><b>Utility Page</b></h1>
            <ul >
                <li><p>Style Guide</p></li>
                <li><p>404 Not Found</p></li>
                <li><p>Password Protected</p></li>
                <li><p>Licenses</p></li>
                <li><p>Changelog</p></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer