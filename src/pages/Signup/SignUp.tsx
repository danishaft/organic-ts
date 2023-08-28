import Auth from "../../components/Auth/Auth"
import Banner from "../../components/Banner/Banner"
import BannerImg from "../../assets/images/protected.png"
function SignUp() {
  return (
    <div>
        <Banner img={BannerImg} desc={'protected page'}/>
        <Auth />
    </div>
  )
}

export default SignUp