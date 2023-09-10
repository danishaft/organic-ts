import styles from "./About.module.scss"
import { ReactNode } from "react";

interface Props {
    img: string;
    bgColor: string;
    children: ReactNode;
}
function About(props: Props) {
    const {img, bgColor, children} = props
    const divStyle = {
        backgroundColor : `${bgColor}`
    }
  return (
    <div style={divStyle} className={styles.about}>
        <div className={styles.about__bgImg}>
            <img src={img} alt="about us image background"/>
        </div>
        <div className={styles.about__content}>
            {children}
        </div>
    </div>
  )
}

export default About