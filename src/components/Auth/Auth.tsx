import { useState } from 'react'
import { auth, googleProvider } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
import Button from '../buttons/Button'
import styles from "./Auth.module.scss"
import regImg from "../../assets/images/regimg.jpg"

type inputs = {email: string, password: string}
function Auth() {
    const [formData, setFormData] = useState<inputs>({
        email: "",
        password: ""
    })
    console.log(auth.currentUser?.email)
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
  return (
    <div className={styles.auth}>
        <div className={styles.right}>
            <img src={regImg} alt="registration image" />
        </div>
        <div className={styles.left}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <Button type='submit' onClick={signUp} spec='default' content='Sign Up'/>
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