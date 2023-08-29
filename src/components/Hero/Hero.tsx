import { ReactNode } from "react";
import styles from "./Hero.module.scss"

interface PictureProps {
    media: string;
    srcSet: string;
    src: string;
    children: ReactNode;
}
function Hero(props: PictureProps) {
    const {media, srcSet, src, children} = props
  return (
    <div className={styles.hero__sec}>
        <picture>
            <source media={media} srcSet={srcSet} />
            <img src={src} alt="Hero background image " />
        </picture>
        <div className={styles.hero__content}>
          {children}
        </div>
    </div>
  )
}

export default Hero

{/* <section className={styles.hero__sec}>
        <img srcSet="../../assets/images/Bannermb.jpg, ../../assets/images/Banner.jpg 48em" sizes="(min-width: 48em) 48em " src={bgImgMb} alt="background image" /> 
        <picture>
          <source media="(min-width: 48em)" srcset="../../assets/images/Banner.jpg" />
          <img src={bgImgMb} alt="Chris standing up holding his daughter Elva" />
        </picture>
        <div className={styles.hero__content}>
          <p>100% Natural Food</p>
          <h1>Choose the best healthier way of life</h1>
          <Button color={'#274C5B'} spec={'default'} bgColor={'#EFD372'} content={'Explore Now'} />
        </div>
      </section> */}