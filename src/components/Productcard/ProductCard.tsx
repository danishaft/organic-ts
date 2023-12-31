import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs";
import styles from "./ProductCard.module.scss"
type productProps = {
    tagName: string,
    img: string,
    name: string,
    oldPrice: number,
    newPrice: number,
    to: string
}
function ProductCard(props: productProps) {
    const {tagName, img, name, oldPrice, newPrice, to} = props
  return (
    <Link to={to}>
        <figure className={styles.shop__product}>
            <div>
            <div className={styles.product__tag}>{tagName}</div>
            </div>
            <div className={styles.img__container}>
                <img src={img} alt={name}  />
            </div>
            <p className={styles.product__name}>{name}</p>
            <figcaption>
                <s>${oldPrice}</s>
                <p>${newPrice}</p>
                <span className={styles.rating}>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                </span>
            </figcaption>
        </figure>
    </Link>
  )
}

export default ProductCard