import styles from "./AboutUs.module.scss"
import Banner from "../../components/Banner/Banner"
import BannerImg from "../../assets/images/aboutUsImg.png"
import About from "../../containers/About/About"
import WhyChooseUs from "../../containers/WhyChooseUs/WhyChooseUs"
import berriesBg from "../../assets/images/berriesBg.png"
import Button from "../../components/buttons/Button"
import OurTeam from "../../containers/Ourteam/OurTeam"
import AboutUsOffer from "../../containers/Aboutusoffer/AboutUsOffer"
import NewsLetter from "../../containers/Newsletter/NewsLetter"
import Footer from "../../containers/Footer/Footer"
import { LiaTractorSolid } from "react-icons/lia";
import { LiaIndustrySolid } from "react-icons/lia";

function AboutUs() {
  return (
    <main className={styles.main}>
      {/* start of banner section */}
      <section className={styles.about__banner}>
        <Banner img={BannerImg} desc={"background Image"}/>
      </section>
      {/* end of banner section */}
      {/* start of about us sec section */}
      <section className={styles.aboutUs__sec}>
        <About img={berriesBg} bgColor="#ffff">
          <p className={styles.title}>About Us</p>
          <h1><b>We do Creative Things for Success</b></h1>
          <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. <br /> <br />Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className={styles.content__points}>
            <div className={styles.point}>
              <LiaTractorSolid/>
              <p><b>Modern Agriculture
              Equipment</b></p>
            </div>
            <div className={styles.point}>
              <LiaIndustrySolid/>
              <p><b>No growth hormones are used</b></p>
            </div>
          </div>
          <Button type="button" content="Explore More" spec="default"/>
        </About>
      </section>
      {/* end of about us section */}
      {/* start of why choose us section */}
      <section className={styles.whyChooseUs__sec}>
        <WhyChooseUs/>
      </section>
      {/* end of why choose us section */}
      {/* start of team section */}
      <section className={styles.ourTeam__sec}>
        <OurTeam/>
      </section>
      {/* end of team section */}
      {/* start of about us offer section */}
        <section className={styles.aboutUsOffer__sec}>
          <AboutUsOffer/>
        </section>
      {/* end of about us offer section */}
      {/* start of newsletter section */}
        <section className={styles.newsLetter__sec}>
          <NewsLetter/>
        </section>
      {/* end of newsletter section */}
      {/* start of footer section */}
        <section className={styles.footer__sec}>
          <Footer/>
        </section>
      {/* end of footer section */}
    </main>
  )
}

export default AboutUs