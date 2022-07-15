import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../actions/errorActions';
import Message from '../components/Message';
import Showcase from '../components/Showcase';

const ForgotPasswordPage = () => {
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');
   const [msg, setMsg] = useState('');
   const [error, setError] = useState('');

   useEffect(() => {
      dispatch(clearErrors());
   }, [dispatch]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const url = `/api/password-reset`;
         const { data } = await axios.post(url, { email });
         setMsg(data.msg);
         setError('');
      } catch (error) {
         if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
         ) {
            setError(error.response.data.msg);
            setMsg('');
         }
      }
   };

   return (
      <div className="forgotpasswordpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Forgot your Password"
         />

         <div className="forgotpassword">
            <div className="content">
               <form onSubmit={handleSubmit}>
                  <div>
                     <label htmlFor="email">Email Address</label>
                     <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                     />
                  </div>
                  {error && <Message msg={error} variant="error" box />}
                  {msg && <Message msg={msg} variant="success" box />}

                  <div>
                     <button className="btn btn-primary">
                        {/* {loading ? <Loader /> : 'Log In'} */}
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ForgotPasswordPage;
