import styles from "./TeamCard.module.scss"
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
interface TeamProps{
    img: string;
    name:string;
    position: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
}
function TeamCard(props: TeamProps) {
    const {img, name, position, instagram, facebook, twitter} = props
  return (
    <figure className={styles.team__card}>
        <img src={img} alt="Team member profile picture" />
        <figcaption>
            <p className={styles.name}><b>{name}</b></p>
            <div className={styles.bottom__flex}>
                <p className={styles.position}>{position}</p>
                <div className={styles.socials}>
                    <a href={instagram}>
                        <BiLogoInstagram/>
                    </a>
                    <a href={facebook}>
                        <BiLogoFacebookCircle/>
                    </a>
                    <a href={twitter}>
                        <BiLogoTwitter/>
                    </a>
                </div>
            </div>
        </figcaption>
    </figure>
  )
}

export default TeamCard