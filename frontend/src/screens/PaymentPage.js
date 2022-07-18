import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Showcase from '../components/Showcase';
import { savePaymentMethod } from '../actions/cartActions';
import { clearErrors } from '../actions/errorActions';

const PaymentPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [payment, setPayment] = useState('Cash');

   const loginState = useSelector((state) => state.login);
   const { user } = loginState;

   useEffect(() => {
      if (!user) {
         return navigate('/login/redirect=/');
      }

      dispatch(clearErrors());
   }, [dispatch, navigate, user]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(savePaymentMethod(payment));
      navigate('/confirm-order');
   };

   return (
      <div className="paymentpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Payment"
         />

         <div className="payment">
            <div className="content">
               <form onSubmit={handleSubmit}>
                  <div className="checkbox">
                     <input
                        type="radio"
                        id="Cash"
                        value={payment}
                        name="payment"
                        autoComplete="off"
                        onChange={(e) => setPayment(e.target.id)}
                     />
                     <label htmlFor="Cash">Cash on Delivery</label>
                  </div>
                  <div>
                     <button className="btn btn-primary">
                        Continue to Confirm Order
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PaymentPage;
