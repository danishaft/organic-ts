import styles from "./OfferCard.module.scss"

interface OfferCardProps{
    img: string;
    name: string;
}
function OfferCard(props: OfferCardProps) {
    const {img, name} = props
  return (
    <div className={styles.offerCard}>
        <div className={styles.img}>
            <img src={img} alt={name}/>
        </div>
        <p>{name}</p>
    </div>
  )
}

export default OfferCard