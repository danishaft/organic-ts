import styles from "./NewsLetter.module.scss"
import NewsLetterImg from "../../assets/images/newsletter.jpg"
import Button from "../../components/buttons/Button"
function NewsLetter() {
  return (
    <div className={styles.newsletter}>
        <div className={styles.newsletter__img}>
            <img src={NewsLetterImg} alt="background image for news letter section" />
        </div>
        <div className={styles.newsletter__content}>
            <p><b>Subscribe to <br /> our Newsletter</b></p>
            <form>
                <input
                    type="text"
                    name="email"
                    placeholder="Your Email Address"
                />
                <Button type="submit" content="subscribe" />
            </form>
        </div>
    </div>
  )
}

export default NewsLetter