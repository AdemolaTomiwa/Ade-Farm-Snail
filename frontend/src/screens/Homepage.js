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

   console.log(errorState);

   useEffect(() => {
      dispatch(getProducts());
   }, [dispatch]);

   return (
      <div className="homepage">
         <div className="showcase">
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
                  <div key={product._id} className="product">
                     <div className="img">
                        <img src={product.image} alt={product.name} />
                     </div>
                     <div className="content">
                        <h3>{product.name}</h3>
                        <h4># {product.price}</h4>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">Add to Cart</button>
                     </div>
                  </div>
               ))}
         </div>
         {/* <div className="products">
            <div className="product">
               <div className="img">
                  <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1sU8Q5SQ-Fl6nDNqE-J1YfMI1J-haQyYhg&usqp=CAU"
                     alt="Snail"
                  />
               </div>
               <div className="content">
                  <h3>Grilled Snail</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto cupiditate consequuntur dolores praesentium
                     amet, alias quos tenetur molestiae dolore, suscipit, fugiat
                     neque maxime repellat quae illum veritatis tempora possimus
                     cumque!
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
               </div>
            </div>

            <div className="product">
               <div className="img">
                  <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1sU8Q5SQ-Fl6nDNqE-J1YfMI1J-haQyYhg&usqp=CAU"
                     alt="Snail"
                  />
               </div>
               <div className="content">
                  <h3>Grilled Snail</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto cupiditate consequuntur dolores praesentium
                     amet, alias quos tenetur molestiae dolore, suscipit, fugiat
                     neque maxime repellat quae illum veritatis tempora possimus
                     cumque!
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
               </div>
            </div>

            <div className="product">
               <div className="img">
                  <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT947KtGnTKTi_9hN3h6MsjjdaYl0sZftRuzA&usqp=CAU"
                     alt="Snail"
                  />
               </div>
               <div className="content">
                  <h3>Grilled Snail</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto cupiditate consequuntur dolores praesentium
                     amet, alias quos tenetur molestiae dolore, suscipit, fugiat
                     neque maxime repellat quae illum veritatis tempora possimus
                     cumque!
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
               </div>
            </div>

            <div className="product">
               <div className="img">
                  <img
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WK6rR4mL9JI3HRCFuQbAe_dIMMj0AkqliQ&usqp=CAU"
                     alt="Snail"
                  />
               </div>
               <div className="content">
                  <h3>Grilled Snail</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Architecto cupiditate consequuntur dolores praesentium
                     amet, alias quos tenetur molestiae dolore, suscipit, fugiat
                     neque maxime repellat quae illum veritatis tempora possimus
                     cumque!
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
               </div>
            </div>
         </div> */}

         {/* Our Farm */}
         <OurFarm />

         {/* Social Media */}
         <SocialMedia />
      </div>
   );
};

export default Homepage;
