import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import Showcase from '../components/Showcase';

const ProductsPage = () => {
   const dispatch = useDispatch();

   const productState = useSelector((state) => state.products);
   const { loading, products } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <div className="productspage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Our Products"
         />

         {loading && <Loader />}

         {msg && <Message msg={msg} variant="error" box />}

         <div className="products">
            <div className="content">
               <div className="products-container">
                  {products &&
                     products.map((product) => (
                        <Product key={product._id} product={product} />
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductsPage;
