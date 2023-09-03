import BlogCard from "../../components/Blogcard/BlogCard"
import BlogCover from "../../assets/images/BlogCover.png"
import Button from "../../components/buttons/Button"
import styles from "./Blog.module.scss"
function Blog() {
  return (
    <div className={styles.blog}>
      <p>News</p>
      <div className={styles.blog__header}>
        <h1>Discover weekly content about organic food, & more</h1>
        <Button type="button" content="More News" spec="default"/>
      </div>
      <div className={styles.blog__list}>
        <BlogCard img={BlogCover} date={"25 Nov"} creator={"Rachi Card"} title={"The Benefits of Vitamin D & How to Get It"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
        <BlogCard img={BlogCover} date={"25 Nov"} creator={"Rachi Card"} title={"The Benefits of Vitamin D & How to Get It"} text={"Simply dummy text of the printing and typesetting industry. Lorem Ipsum"}/>
      </div>
    </div>
  )
}

export default Blog