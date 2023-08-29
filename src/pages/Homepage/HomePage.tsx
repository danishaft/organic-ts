
import styles from "./HomePage.module.scss"
import bgImg from "../../assets/images/Banner.jpg"
import bgImgMb from "../../assets/images/1111.jpg"
import AdsImg1 from "../../assets/images/bananaAds.png"
import AdsImg2 from "../../assets/images/appleAds.png"
import aboutImg from "../../assets/images/about.png"
import mailbox from "../../assets/images/Mailbox Quality.png"
import vegan from "../../assets/images/Vegan Food.png"
import broccoli from "../../assets/images/broccoli.png"
import Button from "../../components/buttons/Button"
import ProductCard from "../../components/Productcard/ProductCard"
import Hero from "../../components/Hero/Hero"
function HomePage() {
  return (
    <main>
      {/* start of the homepage hero section */}
      <section className={styles.homepage__hero}>
        <Hero media={'(min-width: 48em)'} srcSet={bgImg} src={bgImgMb}>
            <p>100% Natural Food</p>
            <h1>Choose the best healthier way of life</h1>
            <Button type={'button'} color={'#274C5B'} spec={'default'} bgColor={'#EFD372'} content={'Explore Now'} />
        </Hero>
      </section>
      {/* end of the homepage hero section */}
      {/*start of fruit Advert section */}
      <section className={styles.advert__sec}>
        <div>
          <figure>
            <img src={AdsImg1} alt="advert for garden food" />
          </figure>
          <figure>
            <img src={AdsImg2} alt="advert for vegetables " />
          </figure>
        </div>
      </section>
      {/*end of fruit Advert section */}
      {/* start of about sec */}
      <section className={styles.about__sec}>
          <div className={styles.about__content}>
            <p>About Us</p>
            <h1>We Believe in Working Accredited Farmers</h1>
            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div className={styles.about__options}>
              <div className={styles.option}>
                <span className={styles.option__icon}>
                  <img src={vegan} alt="vegan icon" />
                </span>
                <span className={styles.option__content}>
                  <p>Organic Foods Only</p>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </span>
              </div>
              <div className={styles.option}>
                <span className={styles.option__icon}>
                  <img src={mailbox} alt="mailbox icon" />
                </span>
                <span className={styles.option__content}>
                  <p>Quality Standards</p>
                  <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </span>
              </div>
            </div>
            <Button type={'default'} bgColor={'#274C5B'} content={'Shop Now'} />
          </div>
          {/* <img src={aboutImg} alt="about us image background"/> */}
      </section>
      {/* end of about sec */}
      {/* start of shop sec */}
      <section className={styles.shop__sec}>
        <div>
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
        </div>
      </section>
      {/* end of shop sec */}
    </main>
  )
}

export default HomePage