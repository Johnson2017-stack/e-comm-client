// import React, { useState } from 'react';
// import './Login.css';
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//     const history = useHistory();
//     const[email, setEmail] = useState("")
//     const[password, setPassword] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
          
//         axios.post('https://e-comm-server-w0d8.onrender.com/api/login', {
//           email: email,
//           password: password,
//         })
//         .then(result => {
//             console.log(result)
//             if (result.status(200) {
//                 setIsSignedIn(true)
//                 setEmail('')
//                 setPassword('')
//             }
//           })
//         //   .catch (
//         //     return
//         //   )
//     };

//   return (
//     <div className='login'>
//             <Link to='/'>
//                 <div className="login__logo">
//                     <h1>Johnson's MotorSports</h1>
//                 </div>
                    
                    
                
//             </Link>

//             <div className='login__container'>
//                 <h1>Sign-in</h1>

//                 <form>
//                     <h5>E-mail</h5>
//                     <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

//                     <h5>Password</h5>
//                     <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

//                     <button type='submit' className='login__signInButton' onClick={handleSubmit}>Sign In</button>
//                 </form>

//                 <p>
//                     By signing-in you agree to Johnsons's MotorSports Conditions of Use & Sale. Please
//                     see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>

//                 <button className='login__registerButton'>Create your Account</button>
//             </div>
//         </div>
  
   
//   )
// }

// export default Login