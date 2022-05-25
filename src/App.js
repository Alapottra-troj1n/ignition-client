import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import PurchasePage from './components/PurchasePage/PurchasePage';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import MyReviews from './components/Dashboard/MyReviews';
import UpdateProfile from './components/Dashboard/UpdateProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useUser from './hooks/useUser';
import ManageAllOrders from './components/Dashboard/Admin/ManageAllOrders';
import AddAProduct from './components/Dashboard/Admin/AddAProduct';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import ManageProducts from './components/Dashboard/Admin/ManageProducts';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
import Blog from './components/Blog/Blog';
import Portfolio from './components/Portfolio/Portfolio';
import Payment from './components/Dashboard/Payment';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [fetchedUser] = useUser(user)
  const isAdmin = fetchedUser?.isAdmin;

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth> } >
         {isAdmin ?  <Route index element={<ManageAllOrders/>}></Route> :  <Route index element={<MyOrders />}></Route>}
        
          <Route path='addreview' element={<MyReviews />}></Route>

          <Route path='myprofile' element={<MyProfile />}></Route>

          {/* other admin routes */}
          <Route path='addaproduct' element={<RequireAdmin><AddAProduct /></RequireAdmin> }></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          <Route path='manageproducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          




        </Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage /></RequireAuth> } ></Route>
        <Route path='/updateprofile' element={<RequireAuth><UpdateProfile /></RequireAuth> } ></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/payment/:id' element={<Payment/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
