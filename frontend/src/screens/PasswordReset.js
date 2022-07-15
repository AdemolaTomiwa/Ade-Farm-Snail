import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearErrors } from '../actions/errorActions';
import Message from '../components/Message';

import Showcase from '../components/Showcase';
import NotFoundPage from '../screens/NotFoundPage';

const PasswordReset = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const url = `/api/password-reset/${params.id}/${params.token}`;

   const [validUrl, setValidUrl] = useState(true);
   const [password, setPassword] = useState('');
   const [msg, setMsg] = useState('');
   const [error, setError] = useState('');

   useEffect(() => {
      dispatch(clearErrors());
      const verifyUrl = async () => {
         try {
            await axios.get(url);
            setValidUrl(true);
         } catch (error) {
            setValidUrl(false);
         }
      };
      verifyUrl();
   }, [params, url, dispatch]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const passwordObj = {
         password,
      };

      try {
         const { data } = await axios.post(url, passwordObj);
         setMsg(data.msg);
         setError('');
         window.location = '/login/redirect=/';
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

   return validUrl ? (
      <div className="passwordresetpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Reset Password"
         />

         <div className="passwordreset">
            <div className="content">
               <form onSubmit={handleSubmit}>
                  <div>
                     <label htmlFor="password">New Password</label>
                     <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
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
   ) : (
      <NotFoundPage />
   );
};

export default PasswordReset;
