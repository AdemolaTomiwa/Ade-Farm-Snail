import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import { getProducts } from '../actions/productActions';
import OurFarm from '../components/OurFarm';
import SocialMedia from '../components/SocialMedia';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Homepage = () => {
   const dispatch = useDispatch();

   const productState = useSelector((state) => state.products);
   const { loading, products } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <div className="homepage">
         <div className="showcase-home">
            <img
               src="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
               alt="Snails"
            />
            <div className="intro">
               <h1>
                  Snails for{' '}
                  <span>
                     <Typical
                        steps={[
                           'Pleasure',
                           2000,
                           'Satisfaction',
                           3000,
                           'Relaxation',
                           4000,
                           'Enjoyment',
                           5000,
                        ]}
                        loop={Infinity}
                        wrapper="b"
                     />
                  </span>
               </h1>
               <Link to="/products">
                  <button className="btn btn-primary">Order Now</button>
               </Link>
            </div>
         </div>

         {/* Products */}
         {loading && <Loader />}

         {msg && <Message msg={msg} variant="error" box />}

         <div className="products">
            {products &&
               products.map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                     <div className="product">
                        <div className="img">
                           <img src={product.image} alt={product.name} />
                        </div>
                        <div className="content">
                           <h3>{product.name}</h3>
                           <h4># {product.price}</h4>
                           <p>{product.description}</p>
                           <button className="btn btn-primary">
                              Add to Cart
                           </button>
                        </div>
                     </div>
                  </Link>
               ))}
         </div>

         {/* Our Farm */}
         <OurFarm />

         {/* Social Media */}
         <SocialMedia />
      </div>
   );
};

export default Homepage;
