import React from 'react';
import Showcase from '../components/Showcase';

const CartPage = () => {
   return (
      <div className="cartpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Your Cart"
         />
         <div className="cart">
            <div className="content">
               <div className="boxes">
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
                           <small># 1500</small>
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
                           <small># 1500</small>
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
                           <small># 1500</small>
                        </div>
                     </div>
                     <div className="options">
                        <h5>
                           <i className="fas fa-trash"></i> Remove
                        </h5>
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartPage;
