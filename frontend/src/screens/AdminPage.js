import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { getRecentOrders } from '../actions/orderActions';
import { getRecentUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Showcase from '../components/Showcase';
import { getRecentProducts } from '../actions/productActions';
import { clearErrors } from '../actions/errorActions';

const AdminPage = () => {
   const dispatch = useDispatch();

   const recentUsers = useSelector((state) => state.recentUserList);
   const { loading, users } = recentUsers;

   const recentOrders = useSelector((state) => state.recentOrderList);
   const { loadingOrder = loading, orders } = recentOrders;

   const recentProductState = useSelector((state) => state.recentProducts);
   const { loadingProducts = loading, products } = recentProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(clearErrors());
      dispatch(getRecentUsers());
      dispatch(getRecentOrders());
      dispatch(getRecentProducts());
   }, [dispatch]);

   return (
      <div className="adminpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="Admin"
         />

         <div className="admin">
            <div className="content">
               <div className="box">
                  <h3>Users</h3>

                  {loading && <Loader />}

                  {msg && <Message msg={msg} variant="error" box />}

                  {users && users.length === 0 && (
                     <Message msg="You have no Users!" variant="success" box />
                  )}

                  <div className="items">
                     {users &&
                        users.map((user) => (
                           <Link key={user._id} to={`/user/${user._id}`}>
                              <div className="item-box">
                                 <div className="name">
                                    <h5>
                                       {user.firstName} {user.lastName}
                                    </h5>
                                 </div>
                                 <div>
                                    <h5>{user.email}</h5>
                                 </div>
                                 <div>
                                    {user.isAdmin ? (
                                       <h5>
                                          <i className="fas fa-check text-success"></i>
                                          Admin
                                       </h5>
                                    ) : (
                                       <h5>
                                          <i className="fas fa-exclamation-circle text-danger"></i>
                                          Not admin
                                       </h5>
                                    )}
                                 </div>
                              </div>
                           </Link>
                        ))}
                  </div>
                  <Link to="/all-users">
                     <button
                        disabled={users && users.length === 0}
                        className="btn btn-primary button"
                     >
                        See all Users
                     </button>
                  </Link>
               </div>

               {/* Products */}
               <div className="box">
                  <h3>Products</h3>

                  {loadingProducts && <Loader />}

                  {msg && <Message msg={msg} variant="error" box />}

                  {users && users.length === 0 && (
                     <Message
                        msg="You have no Products! Create now"
                        variant="success"
                        box
                     />
                  )}

                  <div className="items">
                     {products &&
                        products.map((product) => (
                           <Link
                              key={product._id}
                              to={`/product/${product._id}`}
                           >
                              <div className="item-box">
                                 <div className="img">
                                    <img
                                       src={product.image}
                                       alt={product.image}
                                    />
                                 </div>
                                 <div className="name">
                                    <h5>{product.name} </h5>
                                 </div>
                                 <div>
                                    <h5># {product.price}</h5>
                                 </div>
                              </div>
                           </Link>
                        ))}
                  </div>
                  <Link to="/all-products">
                     <button
                        disabled={products && products.length === 0}
                        className="btn btn-primary button"
                     >
                        See all Products
                     </button>
                  </Link>
               </div>

               {/* orders */}
               <div className="box">
                  <h3>Order</h3>

                  {loadingOrder && <Loader />}

                  {msg && <Message msg={msg} variant="error" box />}

                  {users && users.length === 0 && (
                     <Message msg="You have no Orders!" variant="success" box />
                  )}

                  <div className="items">
                     {orders &&
                        orders.map((order) => (
                           <Link key={order._id} to={`/order/${order._id}`}>
                              <div className="item-box">
                                 <div className="img">
                                    <img
                                       src={order.orderItems[0].image}
                                       alt={order.orderItems[0].image}
                                    />
                                 </div>
                                 <div className="name">
                                    <h5>
                                       {order.userObj.firstName}{' '}
                                       {order.userObj.lastName}
                                    </h5>
                                 </div>
                                 <div className="name">
                                    <h5>{order.orderItems[0].name}</h5>
                                 </div>
                                 <div>
                                    <h5># {order.totalPrice}</h5>
                                 </div>
                                 <div>
                                    <h5>
                                       <Moment format="MM-DD-YYYY">
                                          {order.createdAt}
                                       </Moment>
                                    </h5>
                                 </div>
                                 <div>
                                    {order.isPaid ? (
                                       <h5>
                                          {' '}
                                          <i className="fas fa-check text-success"></i>{' '}
                                          Paid
                                       </h5>
                                    ) : (
                                       <h5>
                                          <i className="fas fa-exclamation-circle text-danger"></i>{' '}
                                          Not Paid
                                       </h5>
                                    )}
                                 </div>
                                 <div>
                                    {order.isdelivered ? (
                                       <h5>
                                          {' '}
                                          <i className="fas fa-check text-success"></i>{' '}
                                          Delivered
                                       </h5>
                                    ) : (
                                       <h5>
                                          {' '}
                                          <i className="fas fa-exclamation-circle text-danger"></i>{' '}
                                          Not delivered
                                       </h5>
                                    )}
                                 </div>
                              </div>
                           </Link>
                        ))}
                  </div>
                  <Link to="/all-orders">
                     <button
                        disabled={orders && orders.length === 0}
                        className="btn btn-primary button"
                     >
                        See all Orders
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminPage;
