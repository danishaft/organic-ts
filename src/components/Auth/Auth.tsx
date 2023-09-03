import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { auth, googleProvider } from '../../config/firebaseConfig'
import { User, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import { Context } from '../../context/context';
import Button from '../buttons/Button'
import styles from "./Auth.module.scss"
import regImg from "../../assets/images/regimg.jpg"
import regImgMb from "../../assets/images/regimgMb.jpg"

type inputs = {email: string, password: string}
type formProps = {actionType: string}
function Auth(props: formProps) {
    const {actionType}= props
    //form data state
    const [formData, setFormData] = useState<inputs>({
        email: "",
        password: ""
    })
    //user context state for user state(logged in or out)
    const {user, setUser} = useContext(Context)
    const navigate = useNavigate()
    // handle changes and controls the form inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Reset form after submission
    };
    // register user with firebase authentication for email and password
    const signUp = async () => {
        try{
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        } catch (err){
            console.error("Error creating account", err);
        } finally {
            setFormData(prev => ({
                ...prev,
                email: "",
                password: ""
            }))
            navigate("/")
            console.log(auth.currentUser?.email)
        }
    };
    // register user with firebase authentication for google
    const signUpWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        } catch (err){
            console.error("Error creating account", err);
        }
    };
    //login registered user when they've been logged out and to log back in
    const logIn = async () => {
        // try{
        //     await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        // } catch (err){
        //     console.error("Error creating account", err);
        // }
        console.log("login")
    };
    //checking if a user is logged in
    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // User is signed in.
            setUser(authUser!);
          } else {
            // User is signed out.
            setUser(null);
          }
        });
    
        return () => {
          // Unsubscribe from the observer when the component unmounts.
          unSubscribe();
        };
      }, []);
      console.log(user)

    const action = actionType === "Log In" ? logIn : signUp
  return (
    <div className={styles.auth}>
        <div className={styles.right}>
            <picture>
                <source media="(min-width: 48em)" srcSet={regImg} />
                <img src={regImgMb} alt="Hero background image " />
            </picture>
        </div>
        <div className={styles.left}>
            <form onSubmit={handleSubmit}>
                <div className={styles.input__container}>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.input__container}>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <Button type='submit' onClick={action} spec='default' content={actionType}/>
                <div className={styles.reg__options}>
                    <div className={styles.sepration}>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <div className={styles.options}>
                        <div onClick={signUpWithGoogle} className={styles.option}><FcGoogle className={styles.google}/> Google</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Auth