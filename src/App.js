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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth> } >
          <Route index element={<MyOrders />}></Route>
          <Route path='addreview' element={<MyReviews />}></Route>
          <Route path='myprofile' element={<MyProfile />}></Route>
        </Route>
        <Route path='/purchase/:id' element={<RequireAuth><PurchasePage /></RequireAuth> } ></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
