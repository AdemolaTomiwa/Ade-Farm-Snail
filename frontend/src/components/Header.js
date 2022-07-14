import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Header = () => {
   return (
      <header>
         <div className="header">
            <div className="logo">
               <Link to="/">
                  <img src={Logo} alt="Ade Farm Snails" />
               </Link>
            </div>
            <div className="nav">
               <Link to="/search">
                  <i className="fas fa-search"></i>
               </Link>
               <Link to="/about">About Us</Link>
               <Link to="/products">Our Products</Link>
               <Link to="/contact">Contact Us</Link>
               <Link to="/cart">Cart</Link>
               <Link className="account" to="/login">
                  Account
               </Link>
            </div>
         </div>
      </header>
   );
};

export default Header;
