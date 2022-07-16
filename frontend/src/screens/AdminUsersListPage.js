import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Showcase from '../components/Showcase';
import { getUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const AdminUserListPage = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const loginState = useSelector((state) => state.login);
   const { user } = loginState;

   const listState = useSelector((state) => state.userList);
   const { loading, users } = listState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         return navigate('/login/redirect=/');
      }

      dispatch(getUsers());
   }, [navigate, user, dispatch]);

   return (
      <div className="adminuserlistpage">
         <Showcase
            img="https://ocdn.eu/pulscms-transforms/1/5jxktkqTURBXy8zMWI5OWFkYTkyMzllZTg3Y2M3Zjk2Mzc5M2VhZjZhZC5qcGVnkpUDADzNBkDNA4STBc0EsM0Cdg"
            title="All Users"
         />

         <div className="adminuserlist">
            <div className="content">
               <div className="main">
                  <h3>All Users</h3>

                  {loading && <Loader />}

                  {msg && <Message msg={msg} variant="error" box />}

                  {users && users.length === 0 && (
                     <Message
                        msg="You have no Users! Create Now"
                        variant="success"
                        box
                     />
                  )}

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
            </div>
         </div>
      </div>
   );
};

export default AdminUserListPage;
