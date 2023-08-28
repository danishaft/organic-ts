import { BsStarFill } from "react-icons/bs";
import styles from "./ProductCard.module.scss"
type productProps = {
    tagName: string,
    img: string,
    name: string,
    oldPrice: string,
    newPrice: string
}
function ProductCard(props: productProps) {
    const {tagName, img, name, oldPrice, newPrice} = props
  return (
    <figure className={styles.shop__product}>
        <div className={styles.product__tag}>{tagName}</div>
        <div className={styles.img__container}>
            <div className={styles.img__overlay}></div>
            <img src={img} alt={name}  />
        </div>
        <p>{name}</p>
        <figcaption>
            <p>{oldPrice}</p>
            <p>{newPrice}</p>
            <span className={styles.rating}>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
            </span>
        </figcaption>
    </figure>
  )
}

export default ProductCard