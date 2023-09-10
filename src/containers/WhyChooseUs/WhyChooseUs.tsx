import styles from "./WhyChooseUs.module.scss"
import { BiRadioCircle } from "react-icons/bi";
import bgImg from "../../assets/images/whyChooseUsImg.jpg"
import cartIcon from "../../assets/images/cart.svg"
import leafIcon from "../../assets/images/leaf.svg"
import callIcon from "../../assets/images/call.svg"
import cardIcon from "../../assets/images/card.svg"
function WhyChooseUs() {
  return (
    <div className={styles.whyChooseUs}>
        <div className={styles.top__sec}>
            <div className={styles.top__content}>
                <div className={styles.heading}>
                  <p className={styles.title}>Why Choose us?</p>
                  <h1><b>We do not buy from the open market & traders.</b></h1>
                  <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                </div>
                <span className={styles.point}>
                    <BiRadioCircle/>
                    <p><b>100% Natural Product</b></p>
                </span>
                <p className={styles.point__text}>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                <span className={styles.point}>
                    <BiRadioCircle/>
                    <p><b>Increases resistance</b></p>
                </span>
                <p className={styles.point__text}>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
            </div>
            <div className={styles.top__img}>
              <img src={bgImg} alt="background image" />
            </div>
        </div>
        <div className={styles.bottom__sec}>
          <div className={styles.main__point}>
            <span>
              <img src={cartIcon} alt="main point icon"/>
            </span>
            <p className={styles.point__title}><b>Return Policy</b></p>
            <p className={styles.text}>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.main__point}>
            <span>
              <img src={leafIcon} alt="main point icon"/>
            </span>
            <p className={styles.point__title}><b>Return Policy</b></p>
            <p className={styles.text}>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.main__point}>
            <span>
              <img src={callIcon} alt="main point icon"/>
            </span>
            <p className={styles.point__title}><b>Return Policy</b></p>
            <p className={styles.text}>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className={styles.main__point}>
            <span>
              <img src={cardIcon} alt="main point icon"/>
            </span>
            <p className={styles.point__title}><b>Return Policy</b></p>
            <p className={styles.text}>Simply dummy text of the printintypesetting industry.</p>
          </div>
        </div>
    </div>
  )
}

export default WhyChooseUs