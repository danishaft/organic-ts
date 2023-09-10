
import styles from "./HomePage.module.scss"
import bgImg from "../../assets/images/Banner.jpg"
import bgImgMb from "../../assets/images/1111.jpg"
import AdsImg1 from "../../assets/images/bananaAds.png"
import AdsImg2 from "../../assets/images/appleAds.png"
import aboutImg from "../../assets/images/grapeBg.png"
import mailbox from "../../assets/images/Mailbox Quality.png"
import vegan from "../../assets/images/Vegan Food.png"
import broccoli from "../../assets/images/broccoli.png"
import Button from "../../components/buttons/Button"
import ProductCard from "../../components/Productcard/ProductCard"
import Hero from "../../containers/Hero/Hero"
import Testimonial from "../../containers/Testimonial/Testimonial"
import Offer from "../../containers/Offer/Offer"
import Gallery from "../../containers/Gallery/Gallery"
import Blog from "../../containers/Blog/Blog"
import NewsLetter from "../../containers/Newsletter/NewsLetter"
import Footer from "../../containers/Footer/Footer"
import About from "../../containers/About/About"
function HomePage() {
  return (
    <main>
      {/* start of the homepage hero section */}
      <section className={styles.homepage__hero}>
        <Hero media={'(min-width: 48em)'} srcSet={bgImg} src={bgImgMb}>
            <div className={styles.hero__content}>
              <p>100% Natural Food</p>
              <h1>Choose the best healthier way of life</h1>
              <Button type={'button'} color={'#274C5B'} spec={'default'} bgColor={'#EFD372'} content={'Explore Now'} />
            </div>
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
          <About img={aboutImg} bgColor="#F9F8F8">
            <p className={styles.title}>About Us</p>
              <h1><b>We Believe in Working Accredited Farmers</b></h1>
              <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
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
              <Button type="button" spec={'default'} bgColor={'#274C5B'} content={'Shop Now'} />
          </About>
      </section>
      {/* end of about sec */}
      {/* start of shop sec */}
      <section className={styles.shop__sec}>
        <div>
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
          <ProductCard tagName={'Vegetables'} img={broccoli} name={'Calabrese Broccoli'} oldPrice={'$20.00'} newPrice={'$13.00'} />
        </div>
      </section>
      {/* end of shop sec */}
      {/* start of testimonial */}
        <section className={styles.testimonial__sec}>
          <Testimonial/>
        </section>
      {/* end of testimonial */}
      {/* start of offer section */}
      <section className={styles.offer__sec}>
          <Offer/>
      </section>
      {/* end of offer section */}
      {/* start of gallery section */}
      <section className={styles.gallery__sec}>
        <Gallery/>
      </section>
      {/* end of gallery section */}
      {/* start of blog sec */}
      <section className={styles.blog__sec}>
        <Blog/>
      </section>
      {/* end of blog sec */}
      {/* start of newsletter sec */}
        <section className={styles.newsletter__sec}>
          <NewsLetter/>
        </section>
      {/* end of newsletter sec */}
      {/* start of footer sec */}
        <section className={styles.footer__sec}>
          <Footer/>
        </section>
      {/* end of footer sec */}
    </main>
  )
}

export default HomePage