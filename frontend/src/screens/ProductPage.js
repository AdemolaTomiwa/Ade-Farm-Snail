import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Showcase from '../components/Showcase';

const ProductPage = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const [qty, setQty] = useState('1');

   const productState = useSelector((state) => state.product);
   const { loading, product } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getProduct(params.id));
   }, [dispatch, params]);
   return (
      <div className="productpage">
         {loading && <Loader />}

         {msg && <Message msg={msg} variant="error" box />}

         {product && (
            <>
               <Showcase img={product.image} title={product.name} />
               <div className="product">
                  <div className="content">
                     <div className="main">
                        <div className="img">
                           <img src={product.image} alt={product.name} />
                        </div>
                        <div className="details">
                           <h3>{product.name}</h3>
                           <h4># {product.price}</h4>
                           <p>{product.description}</p>
                        </div>
                     </div>
                     <div className="sq-box">
                        <div>
                           <p>Price:</p>
                           <span># {product.price}</span>
                        </div>
                        <div className="select-box">
                           <p>Qty: </p>
                           <aside className="select">
                              <select
                                 value={qty}
                                 onChange={(e) => setQty(e.target.value)}
                              >
                                 <option value="1">1</option>
                                 <option value="2">2</option>
                                 <option value="3">3</option>
                                 <option value="4">4</option>
                                 <option value="5">5</option>
                                 <option value="6">6</option>
                                 <option value="7">7</option>
                                 <option value="7">8</option>
                                 <option value="9">9</option>
                                 <option value="10">10</option>
                              </select>
                              <i className="fas fa-caret-down"></i>
                           </aside>
                        </div>
                        <div className="button">
                           <button className="btn btn-primary">
                              Add to Cart
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default ProductPage;
