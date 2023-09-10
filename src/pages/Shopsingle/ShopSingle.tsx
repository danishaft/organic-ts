import { useParams } from "react-router-dom"
import {useProduct} from "../../contexts/productContext"
import Banner from "../../components/Banner/Banner"
import shopSingleImg from "../../assets/images/shop-single.png"
import ProductCard from "../../components/Productcard/ProductCard"
import { BsStarFill } from "react-icons/bs";
import Button from "../../components/buttons/Button"
import styles from "./ShopSingle.module.scss"
function ShopSingle() {
    const {productId} = useParams()
    const {products} = useProduct()
    const product = products.find((p) => p.id === productId);
    const relatedProducts = products ? products.sort(() => Math.random() - 0.5).slice(0, 4).map(product => (
      <ProductCard key={product.id} tagName={product.category} img={product?.image} name={product.name} oldPrice={product["old price"]} newPrice={product["new price"]} to={`/shop/product/${product.id}`} />
    )) : []
    // console.log(shuffledArr)
  return (
    <main className={styles.main}>
        {/* banner sec starts */}
            <section className={styles.shopSingle__banner}>
                <Banner img={shopSingleImg} desc="shop single banner img"/>
            </section>
        {/* banner sec ends */}
        {/* single product sec starts */}
          <section className={styles.singleProduct__sec}>
            <figure className={styles.single__product}>
                <div className={styles.product__img}><img src={product?.image} alt="" /></div>
                <figcaption>
                  <h2 className={styles.product__name}>
                    {product?.name}
                  </h2>
                  <span className={styles.product__stars}>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                    <BsStarFill/>
                  </span>
                  <span className={styles.product__prices}>
                    <s>${product?.["old price"]}</s> <p>${product?.["new price"]}</p>
                  </span>
                  <p className={styles.product__productDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reprehenderit.</p>
                  <div className={styles.addTo__cart}>
                    Quantity:
                    <span className={styles.quantity}>1</span>
                    <Button type='button' spec='default' content='Add To Cart'/>
                  </div>
                </figcaption>
            </figure>
            <article className={styles.product__info}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati dolore unde illo labore officia praesentium, sit quibusdam quae. Necessitatibus, dolorem.
            </article>
          </section>
        {/* single product sec ends */}
        {/* related products sec begins */}
          <section className={styles.relatedProduct__sec}>
            <div className={styles.related__product}>
              <h2 className={styles.heading}>Related Products</h2>
              <div className={styles.relatedProduct__list}>
                {relatedProducts}
              </div>
            </div>
          </section>
        {/* related products sec ends */}
    </main>
  )
}

export default ShopSingle