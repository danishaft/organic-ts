import styles from "./Gallery.module.scss"
import Button from "../../components/buttons/Button"
import galleryOrange from "../../assets/images/gallery-orange.png"
function Gallery() {
  return (
    <div className={styles.gallery}>
        
        <div className={styles.gallery__item}>
            <div>
            <img src={galleryOrange} alt="background image" />
            </div>
            <div className={styles.button_container}>
            <Button type={"button"} content={"Organic Juice"} color={"#274C5B"} bgColor={"#ffff"}/>
              </div> 
            
        </div>
        <div className={styles.gallery__item}>
            <div>
            <img src={galleryOrange} alt="background image" />
            </div>
            <div className={styles.button_container}>
            <Button type={"button"} content={"Organic Juice"} color={"#274C5B"} bgColor={"#ffff"}/>
            </div>
        </div>
        <div className={styles.gallery__item}>
            <div>
            <img src={galleryOrange} alt="background image" />
            </div>
            <div className={styles.button_container}>
            <Button type={"button"} content={"Organic Juice"} color={"#274C5B"} bgColor={"#ffff"}/>
            </div>
        </div>
    </div>
  )
}

export default Gallery