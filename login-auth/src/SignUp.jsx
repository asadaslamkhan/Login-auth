import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {auth} from './Components/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Swal from 'sweetalert2'


const SignUp = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            createUserWithEmailAndPassword(auth, email,password)
            Swal.fire({
                title: "Congratulation",
                text: "Your Account Has Been Created",
                icon: "success"
              });
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='signup-container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Sign In To Your Account</h2>
            <label htmlFor="email">Email:
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label htmlFor="password">Password
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type='submit'>SignUp</button> <br />
            <p>Already Registered? <Link to="/Login">Login</Link></p>
        </form>
    </div>  
  )
}

export default SignUp
