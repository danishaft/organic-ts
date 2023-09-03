import styles from "./Offer.module.scss"
import Button from "../../components/buttons/Button"
import ProductCard from "../../components/Productcard/ProductCard"
import mungBeanImg from "../../assets/images/mung-bean.png"
function Offer() {
  return (
    <div className={styles.offer}>
        <div className={styles.offer__top}>
            <span className={styles.offer__heading}>
                <p>Offer</p>
                <h1><b>We Offer Organic For You</b></h1>
            </span>
            <div>
            <Button type={"button"} color={"#274C5B"} spec={"default"} bgColor={"#EFD372"} content={"View All Product"}  />
            </div>
        </div>
        <div className={styles.offer__products}>
            <ProductCard tagName={"Vegetable"} img={mungBeanImg} name={"Mung Bean"} oldPrice={"$10"} newPrice={"$20"}/>
            <ProductCard tagName={"Vegetable"} img={mungBeanImg} name={"Mung Bean"} oldPrice={"$10"} newPrice={"$20"}/>
            <ProductCard tagName={"Vegetable"} img={mungBeanImg} name={"Mung Bean"} oldPrice={"$10"} newPrice={"$20"}/>
            <ProductCard tagName={"Vegetable"} img={mungBeanImg} name={"Mung Bean"} oldPrice={"$10"} newPrice={"$20"}/>
        </div>
    </div>
  )
}

export default Offer