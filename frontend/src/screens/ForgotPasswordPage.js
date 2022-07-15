import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../actions/errorActions';
import { forgotPassword } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Showcase from '../components/Showcase';

const ForgotPasswordPage = () => {
   const dispatch = useDispatch();

   const [email, setEmail] = useState('');
   // const [msg, setMsg] = useState('');

   const forgotPasswordState = useSelector((state) => state.forgotPassword);
   const { loading, successMsg } = forgotPasswordState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(clearErrors());

      if (successMsg) {
         dispatch(clearErrors());
      }
   }, [dispatch, successMsg]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const emailObj = {
         email,
      };

      dispatch(forgotPassword(emailObj));
      // try {
      //    const url = `/api/password-reset`;
      //    const { data } = await axios.post(url, { email });
      //    setMsg(data.msg);
      //    setError('');
      // } catch (error) {
      //    if (
      //       error.response &&
      //       error.response.status >= 400 &&
      //       error.response.status <= 500
      //    ) {
      //       setError(error.response.data.msg);
      //       setMsg('');
      //    }
      // }
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
                  {msg && <Message msg={msg} variant="error" box />}
                  {successMsg && (
                     <Message msg={successMsg} variant="success" box />
                  )}

                  <div>
                     <button className="btn btn-primary">
                        {loading ? <Loader /> : 'Submit'}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ForgotPasswordPage;
