import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Showcase from '../components/Showcase';

const RegisterPage = () => {
   const [showPassword, setshowPassword] = useState(false);

   const togglePassword = () => {
      setshowPassword(!showPassword);
   };

   return (
      <div className="registerpage">
         <Showcase
            title="Sign Up"
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
         />

         <div className="register">
            <div className="content">
               <form>
                  <div>
                     <label htmlFor="firstName">First Name</label>
                     <input type="text" id="firstName" />
                  </div>
                  <div>
                     <label htmlFor="lastName">Last Name</label>
                     <input type="text" id="lastName" />
                  </div>
                  <div>
                     <label htmlFor="email">Email Address</label>
                     <input type="text" id="email" />
                  </div>
                  <div className="password">
                     <label htmlFor="password">Password</label>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                     />
                     <i
                        onClick={togglePassword}
                        className={
                           showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                        }
                     ></i>
                  </div>
                  <div>
                     <button className="btn btn-primary">Log In</button>
                  </div>
                  <strong>
                     Already have an account? <Link to="/login">Log In</Link>
                  </strong>
               </form>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
