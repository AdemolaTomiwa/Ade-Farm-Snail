import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import Showcase from '../components/Showcase';

const CartPage = ({ location }) => {
   const params = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const id = params.id ? params.id : null;
   const headQty = params.qty ? Number(params.qty.split('=')[1]) : 1;

   // const [qty, setQty] = useState('1');

   const cartState = useSelector((state) => state.cart);
   const { cartItems, success } = cartState;

   useEffect(() => {
      if (id) {
         dispatch(addToCart(id, headQty));
      }

      if (success) {
         navigate('/cart');
      }
   }, [dispatch, id, headQty, navigate, success]);

   return (
      <div className="cartpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Your Cart"
         />
         <div className="cart">
            <div className="content">
               <div className="boxes">
                  {cartItems &&
                     cartItems.map((cart) => (
                        <div key={cart.id} className="box">
                           <div className="main">
                              <div className="img">
                                 <img src={cart.image} alt={cart.name} />
                              </div>
                              <div className="details">
                                 <h4>{cart.name}</h4>
                                 <h4># {cart.price}</h4>
                              </div>
                           </div>

                           <div className="options">
                              <h5>
                                 <i className="fas fa-trash"></i> Remove
                              </h5>
                              <div className="qty">
                                 <button
                                    disabled={cart.qty === 1}
                                    className="btn btn-primary"
                                 >
                                    <i className="fas fa-minus"></i>
                                 </button>{' '}
                                 <h5>{cart.qty}</h5>{' '}
                                 <button className="btn btn-primary">
                                    <i className="fas fa-plus"></i>
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}

                  {/* <div className="box">
                     <div className="main">
                        <div className="img">
                           <img
                              src="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
                              alt=""
                           />
                        </div>
                        <div className="details">
                           <h4>Grilled Snail</h4>
                           <h4># 1500</h4>
                        </div>
                     </div>
                     <div className="options">
                        <h5>
                           <i className="fas fa-trash"></i> Remove
                        </h5>
                     </div>
                  </div>
                  <div className="box">
                     <div className="main">
                        <div className="img">
                           <img
                              src="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
                              alt=""
                           />
                        </div>
                        <div className="details">
                           <h4>Grilled Snail</h4>
                           <h4># 1500</h4>
                        </div>
                     </div>
                     <div className="options">
                        <h5>
                           <i className="fas fa-trash"></i> Remove
                        </h5>
                        <div className="qty">
                           <i className="fas fa-minus"></i> <h5>1</h5>{' '}
                           <i className="fas fa-plus"></i>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="sq-box-container">
                  <div className="head">
                     <h3>Cart Summary</h3>
                  </div>
                  <div className="sq-box">
                     <div>
                        <p>Subtotal:</p>
                        <span># 7000</span>
                     </div>
                     <div>
                        <p>Total Quantity:</p>
                        <span>7</span>
                     </div>
                     <div className="button">
                        <button className="btn btn-primary">
                           Proceed to Checkout
                        </button>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartPage;
