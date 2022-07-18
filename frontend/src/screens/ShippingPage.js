import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartActions';
import { clearErrors } from '../actions/errorActions';
import Message from '../components/Message';
import Showcase from '../components/Showcase';

const ShippingPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const cartState = useSelector((state) => state.cart);
   const { shippingAddress } = cartState;

   const [address, setAddress] = useState(shippingAddress.address);
   const [city, setCity] = useState(shippingAddress.city);
   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
   const [country, setCountry] = useState(shippingAddress.country);
   const [msg, setMsg] = useState(null);

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

      if (!address || !city || !postalCode || !country) {
         return setMsg('Please enter all Shipping fields!');
      }

      const shippingData = {
         address,
         city,
         postalCode,
         country,
      };

      dispatch(saveShippingAddress(shippingData));
      navigate('/payment');
   };

   return (
      <div className="shippingpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Shipping"
         />

         <div className="shipping">
            <div className="content">
               <form onSubmit={handleSubmit}>
                  <div>
                     <label htmlFor="address">Address</label>
                     <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        id="address"
                     />
                  </div>
                  <div>
                     <label htmlFor="city">City</label>
                     <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        id="city"
                     />
                  </div>
                  <div>
                     <label htmlFor="postalCode">Postal Code</label>
                     <input
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        id="postalCode"
                     />
                  </div>
                  <div>
                     <label htmlFor="country">Country</label>
                     <input
                        id="country"
                        value={country}
                        type="text"
                        onChange={(e) => setCountry(e.target.value)}
                     />
                  </div>

                  {msg && <Message msg={msg} variant="error" box />}

                  <div>
                     <button className="btn btn-primary">
                        {' '}
                        {/* {loading ? <Loader /> : 'Create Account'} */}
                        Continue to Payment
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default ShippingPage;
