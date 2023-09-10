import styles from "./AboutUsOffer.module.scss"
import OfferCard from "../../components/Offercard/OfferCard"
import offerSpicy from "../../assets/images/offer-spicy.jpg"
function AboutUsOffer() {
  return (
    <div className={styles.aboutUsOffer}>
      <p className={styles.title}>About Us</p>
      <h1><b>What Offer fot You</b></h1>
      <div className={styles.cards}>
        <OfferCard img={offerSpicy} name="Spicy"/>
        <OfferCard img={offerSpicy} name="Spicy"/>
        <OfferCard img={offerSpicy} name="Spicy"/>
        <OfferCard img={offerSpicy} name="Spicy"/>
      </div>
    </div>
  )
}

export default AboutUsOffer