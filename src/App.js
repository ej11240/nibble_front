import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/login/LoginPage";
import RegisterPage from './component/register/RegisterPage';
import FindTeamPage from './component/findteam/FindTeamPage';
import TableAddPage from './component/taleadd/TableAddPage';
<<<<<<< HEAD
import UserInfoPage from './component/userinfo/UserInfoPage'
import MyInfoPage from './component/userinfo/MyInfoPage'
=======
>>>>>>> 66cd1917c389da7780cff044f223e13750176608
import ScorePage from './component/score/ScorePage';
import ScorePrevPage from './component/score/ScorePrevPage';
import Navbar from './component/navbar';


// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/"   component={<LoginPage/>} />
//         <Route path="register" exact component={<RegisterPage/>} />
//         <Route path="findteam" exact component={<FindTeamPage/>} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register/>}/>
        <Route path="findteam" element={<FindTeam/>}/>
        <Route path='tableadd' element={<TableAdd/>}/>
<<<<<<< HEAD
        <Route path='userinfo' element={<UserInfo/>}/>
        <Route path='myinfo' element={<MyInfo/>}/>
=======
>>>>>>> 66cd1917c389da7780cff044f223e13750176608
        <Route path='score' element={<ScorePage/>}/>
        <Route path='scorePrev' element={<ScorePrevPage/>}/>
      </Routes>
    </Router>
  );
}

function Login(){ return( <LoginPage/>); }
function FindTeam(){
  return(
    <FindTeamPage/>
  )
}
function Register(){
  return(
    <RegisterPage/>
  )
}
function TableAdd(){
  return(
    <TableAddPage/>
  )
}
function UserInfo(){
  return(
    <UserInfoPage/>
  )
}
function MyInfo(){
  return(
    <MyInfoPage/>
  )
}



export default App;
