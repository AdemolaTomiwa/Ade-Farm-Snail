import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import Showcase from '../components/Showcase';
import { clearErrors } from '../actions/errorActions';
import { useDispatch } from 'react-redux';

const EmailVerify = () => {
   const dispatch = useDispatch();

   const [validUrl, setValidUrl] = useState(true);
   const [msg, setMsg] = useState('');
   const param = useParams();

   useEffect(() => {
      dispatch(clearErrors());

      const verifyEmailUrl = async () => {
         try {
            const url = `/api/users/${param.id}/verify/${param.token}`;
            const { data } = await axios.get(url);
            setValidUrl(true);
            setMsg(data.msg);
         } catch (error) {
            console.log(error);
            setValidUrl(false);
         }
      };
      verifyEmailUrl();
   }, [param, dispatch]);

   return (
      <div className="email-verify">
         {validUrl ? (
            <>
               <Showcase
                  img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
                  title={msg}
               />

               <Link to="/">
                  <button className="btn btn-primary">Go to Home Page</button>
               </Link>
            </>
         ) : (
            <NotFoundPage />
         )}
      </div>
   );
};

export default EmailVerify;
