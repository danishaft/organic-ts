import Button from "../buttons/Button"
import styles from "./BlogCard.module.scss"
import { IoPersonSharp } from "react-icons/io5";
type BlogCardProps = {
    img: string;
    date: string;
    creator: string;
    title: string;
    text: string;
}
function BlogCard(props: BlogCardProps) {
    const {img, date, creator, title, text} = props;
  return (
    <div className={styles.blogCard}>
        <div className={styles.blogCard__img}>
            <img src={img} alt="Blog cover Photo" />
        </div>
        <div className={styles.blogCard__details}>
            <div className={styles.details__date}>
                <p className={styles.day}>{date}</p>
            </div>
            <div className={styles.details__text}>
                <div className={styles.creator}><IoPersonSharp className={styles.icon} color='#EFD372'/>By {creator}</div>
                <h1><b>{title}</b></h1>
                <p>{text}</p>
                <Button type="button" spec="default" content={"Read More"}/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard