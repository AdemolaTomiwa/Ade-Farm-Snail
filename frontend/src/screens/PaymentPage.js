import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Showcase from '../components/Showcase';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [payment, setPayment] = useState('paypal');

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
                        id="paypal"
                        value={payment}
                        name="payment"
                        onChange={(e) => setPayment(e.target.id)}
                     />
                     <label htmlFor="paypal">PayPal or Credit Card</label>
                  </div>
                  <div className="checkbox">
                     <input
                        type="radio"
                        id="cash"
                        value={payment}
                        name="payment"
                        onChange={(e) => setPayment(e.target.id)}
                     />
                     <label htmlFor="cash">Cash on Delivery</label>
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
