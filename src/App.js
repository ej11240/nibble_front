import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/login/LoginPage";
import RegisterPage from './component/register/RegisterPage';
import FindTeamPage from './component/findteam/FindTeamPage';
import TableAddPage from './component/taleadd/TableAddPage';
import UserInfoPage from './component/userinfo/UserInfoPage'
import MyInfoPage from './component/userinfo/MyInfoPage'
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
        <Route path='userinfo' element={<UserInfo/>}/>
        <Route path='myinfo' element={<MyInfo/>}/>
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
