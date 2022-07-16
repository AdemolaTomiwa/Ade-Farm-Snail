import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import Showcase from '../components/Showcase';
import { getProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const AdminProductListPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const loginState = useSelector((state) => state.login);
   const { user } = loginState;

   const productState = useSelector((state) => state.products);
   const { loading, products } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         return navigate('/login/redirect=/');
      }

      dispatch(getProducts());
   }, [navigate, user, dispatch]);

   return (
      <div className="adminproductlistpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="All Products"
         />

         <div className="adminproductlist">
            <div className="content">
               <div className="main">
                  <h3>All Products</h3>

                  {loading && <Loader />}

                  {msg && <Message msg={msg} variant="error" box />}

                  {products && products.length === 0 && (
                     <Message
                        msg="You have no Products! Create Now"
                        variant="success"
                        box
                     />
                  )}

                  {products &&
                     products.map((product) => (
                        <Link key={product._id} to={`/product/${product._id}`}>
                           <div className="item-box">
                              <div className="img">
                                 <img src={product.image} alt={product.image} />
                              </div>
                              <div className="name">
                                 <h5>{product.name}</h5>
                              </div>
                              <div>
                                 <h5># {product.price}</h5>
                              </div>
                              <div>
                                 <h5>
                                    <Moment format="MM-DD-YYYY">
                                       {product.createdAt}
                                    </Moment>
                                 </h5>
                              </div>
                           </div>
                        </Link>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminProductListPage;
