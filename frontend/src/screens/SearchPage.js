import React, { useEffect } from 'react';
import Showcase from '../components/Showcase';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../actions/errorActions';
import { getProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

const SearchPage = () => {
   const dispatch = useDispatch();
   const params = useParams();

   const productState = useSelector((state) => state.products);
   const { loading, products } = productState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(clearErrors());
      dispatch(getProducts(params.keyword));
   }, [dispatch, params]);

   return (
      <div className="searchpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Search Products"
         />

         <div className="search">
            <div className="content">
               <SearchBox />

               {loading && <Loader />}

               {msg && <Message msg={msg} variant="error" box />}

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

export default SearchPage;
