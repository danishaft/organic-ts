import { BsStarFill } from "react-icons/bs";
import ProfilePic from "../../assets/images/Profile.jpg"
import testimonialBg from "../../assets/images/testimonialBg.png"
import styles from "./Testimonial.module.scss"
function Testimonial() {
  return (
    <div className={styles.testimonial}>
        <img src={testimonialBg} alt="background image" />
        <div>
        <div className={styles.testimonial__heading}>
            <p>Testimonial</p>
            <h1>What our customers say</h1>
        </div>
        <figure>
            <div className={styles.img}>
                <img src={ProfilePic} alt="A satisfied customer" />
            </div>
            <div className={styles.rating}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
            </div>
            <figcaption>
                <blockquote>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</blockquote>
                <p className={styles.customer__name}>Sara Taylor</p>
                <p className={styles.customer__tag}>Customer</p>
            </figcaption>
        </figure>
        <div className={styles.metric__count}>
            <div className={styles.count}>
                <p className={styles.num}>100%</p>
                <p className={styles.desc}>Organic</p>
            </div>
            <div className={styles.count}>
                <p className={styles.num}>285</p>
                <p className={styles.desc}>Products</p>
            </div>
            <div className={styles.count}>
                <p className={styles.num}>350+</p>
                <p className={styles.desc}>Orchids</p>
            </div>
            <div className={styles.count}>
                <p className={styles.num}>25+</p>
                <p className={styles.desc}>Farm</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonial