import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/login/LoginPage";
import RegisterPage from './component/register/RegisterPage';
import FindTeamPage from './component/findteam/FindTeamPage';
import TableAddPage from './component/taleadd/TableAddPage';
import UserInfoPage from './component/userinfo/UserInfoPage'
import MyInfoPage from './component/userinfo/MyInfoPage'
import ScorePrevPage from './component/score/ScorePrevPage';
import ScorePage from './component/score/ScorePage';
import IdInputPage from './component/Home/Home';
import ChatRoomPage from './component/ChatRoom/ChatRoom';
import Navbar from './component/navbar';
import LectureSetPage from './component/lectureset/LectureSetPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" exact element={<Register/>}/>
        <Route path="findteam" exact element={<FindTeam/>}/>
        <Route path='tableadd' exact element={<TableAdd/>}/>
        <Route path='userinfo' exact element={<UserInfo/>}/>
        <Route path='myinfo' exact element={<MyInfo/>}/>
        <Route path='scorePrev' exact element={<ScorePrevPage/>}/>
        <Route path='score' exact element={<ScorePage/>}/>
        <Route path='chat' exact element={<IdInputPage/>}/>
        <Route path="/:roomId" exact element={<ChatRoomPage/>} />
        <Route path='lectureset' exact element={<Lectureset/>} />
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
function ScorePrev(){
  return(
    <ScorePrevPage/>
  )
}
function Score(){
  return(
    <Score/>
  )
}
function IdInput(){
  return(
    <IdInputPage/>
  )
}
function Chat(){
  return(
    <ChatRoomPage/>
  )
}

function Lectureset(){
  return(
    <LectureSetPage/>
  )
}



export default App;
