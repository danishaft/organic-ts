import styles from "./Banner.module.scss" 
type bannerProps = {img: string, desc: string,}
function Banner(props: bannerProps) {
    const {img,  desc} = props
  return (
    <div className={styles.banner}>
        <img src={img} alt={desc} />
    </div>
  )
}

export default Banner