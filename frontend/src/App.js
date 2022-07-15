import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Homepage from './screens/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './screens/AboutPage';
import ContactPage from './screens/ContactPage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import EmailVerify from './screens/EmailVerify';
import ShippingPage from './screens/ShippingPage';
import ForgotPasswordPage from './screens/ForgotPasswordPage';
import PasswordReset from './screens/PasswordReset';
import PaymentPage from './screens/PaymentPage';
import ConfirmOrderPage from './screens/ConfirmOrderPage';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <Header />
               <div className="container">
                  <Routes>
                     <Route path="/" element={<Homepage />} />
                     <Route path="/about" element={<AboutPage />} />
                     <Route path="/contact" element={<ContactPage />} />
                     <Route path="/product/:id" element={<ProductPage />} />
                     <Route path="/cart" element={<CartPage />} />
                     <Route path="/cart/:id/:qty" element={<CartPage />} />
                     <Route path="/login" element={<LoginPage />} />
                     <Route path="/login/:redirect" element={<LoginPage />} />
                     <Route path="/register" element={<RegisterPage />} />
                     <Route
                        path="/register/:redirect"
                        element={<RegisterPage />}
                     />
                     <Route
                        path="/users/:id/verify/:token"
                        element={<EmailVerify />}
                     />
                     <Route
                        path="/forgot-password"
                        element={<ForgotPasswordPage />}
                     />
                     <Route
                        path="/password-reset/:id/:token"
                        element={<PasswordReset />}
                     />
                     <Route path="/shipping" element={<ShippingPage />} />
                     <Route path="/payment" element={<PaymentPage />} />
                     <Route
                        path="/confirm-order"
                        element={<ConfirmOrderPage />}
                     />
                  </Routes>
               </div>
               <Footer />
            </Router>
         </Provider>
      );
   }
}

export default App;
