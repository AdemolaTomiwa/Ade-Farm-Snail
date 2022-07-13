import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Homepage from './screens/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <Header />
               <Routes>
                  <Route path="/" element={<Homepage />} />
               </Routes>
               <Footer />
            </Router>
         </Provider>
      );
   }
}

export default App;
