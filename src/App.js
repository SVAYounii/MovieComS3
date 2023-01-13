import './App.css';
import { Home } from './Pages/Home/Home'
import { Login } from './Pages/Login/Login'
import { Register } from './Pages/Register/Register'
import { Movies } from './Pages/Movies/Movies'
import { Shows } from './Pages/Shows/Shows'
import { ShowInfo } from './Pages/Shows/ShowInfo.js'
import { MovieInfo } from './Pages/Movies/MovieInfo'
import { Favourite } from './Pages/Favourtite/Favourtite'
import { Profile } from './Pages/Profile/Profile'
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


export function App() {
  var userData = JSON.parse(localStorage.getItem("accessToken"));
  const loggedInUser = userData !== null && userData.accessToken.length > 0 && new Date(userData.refreshtokens[0].expiryDate).getTime() > new Date(Date.now()).getTime()
console.log(userData)
  return (
    <Routes>
      <Route path="/" element={loggedInUser ? (<Home />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Login" element={!loggedInUser ? (<Login />) : (<Navigate replace to={"/"} />)} />
      <Route path="/Register" element={loggedInUser ? (<Register />) : (<Navigate replace to={"/"} />)} />
      <Route path="/Movies" element={loggedInUser ? (<Movies />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Movies/:MovieId" element={loggedInUser ? (<MovieInfo />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Shows" element={loggedInUser ? (<Shows />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Favourite" element={loggedInUser ? (<Favourite />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Profile" element={loggedInUser ? (<Profile />) : (<Navigate replace to={"/Login"} />)} />
      <Route path="/Shows/:ShowId" element={loggedInUser ? (<ShowInfo />) : (<Navigate replace to={"/Login"} />)} />
    </Routes>
  );
}

export default App;





