
import styles from "./Shop.module.scss"
import Banner from "../../components/Banner/Banner"
import ProductCard from "../../components/Productcard/ProductCard"
import NewsLetter from "../../containers/Newsletter/NewsLetter"
import Footer from "../../containers/Footer/Footer"
import bannerImg from "../../assets/images/shop-banner.png"
import {useProduct} from "../../contexts/productContext"
function Shop() {
  const {products} = useProduct()

  const items = products ? products.map((product) => (
      <ProductCard key={product.id} tagName={product.category} img={product?.image} name={product.name} oldPrice={product["old price"]} newPrice={product["new price"]} to={`/shop/product/${product.id}`}  />
  )) : []

  return (
    <main className={styles.main}>
      {/* banner start */}
        <section className={styles.shop__banner}>
          <Banner img={bannerImg} desc="shop banner background image"/>
        </section>
      {/* banner end */}
      {/* shop list start */}
        <section className={styles.shopList__sec}>
          {items}
        </section>
      {/* shop list end */}
      {/* newsletter start */}
        <section className={styles.newsLetter__sec}>
          <NewsLetter/>
        </section>
      {/* newsletter end */}
      {/* footer start */}
      <section className={styles.footer__sec}>
          <Footer/>
        </section>
      {/* footer end */}
    </main>
  )
}

export default Shop