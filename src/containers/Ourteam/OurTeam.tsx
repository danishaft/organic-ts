import styles from "./OurTeam.module.scss"
import TeamCard from "../../components/Teamcard/TeamCard"
import giovanniDp from "../../assets/images/giovanniDp.jpg"
function OurTeam() {
  return (
    <div className={styles.our__team}>
      <div className={styles.heading}>
        <p className={styles.title}>Team</p>
        <h1><b>Our Organic Expert</b></h1>
        <p className={styles.text}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
      </div>
      <div className={styles.cards}>
        <TeamCard img={giovanniDp} name="Giovani Bacardo" position="Farmer"/>
        <TeamCard img={giovanniDp} name="Giovani Bacardo" position="Farmer"/>
        <TeamCard img={giovanniDp} name="Giovani Bacardo" position="Farmer"/>
      </div>
    </div>
  )
}

export default OurTeam