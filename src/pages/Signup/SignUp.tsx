import Auth from "../../components/Auth/Auth"
import styles from "./SignUp.module.scss"
function SignUp() {
  return (
    <section className={styles.sign__up}>
        <Auth actionType="Sign Up"/>
    </section>
  )
}

export default SignUp