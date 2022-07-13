import React from 'react';
import { Link } from 'react-router-dom';

const OurFarm = () => {
   return (
      <div className="ourfarm">
         <div className="content">
            <h3>Our Farm</h3>
            <p>
               {' '}
               Our Snail breeding system at Ade’s farm snails is completely
               hygienic and safe for everyone. We combine proven methods to
               snail farming and are able to supply quality and healthy snails
               to organizations and homes within and outside Nigeria.
            </p>
            <Link to="/farm">
               <button className="btn btn-white">Read More</button>
            </Link>
         </div>
      </div>
   );
};

export default OurFarm;
