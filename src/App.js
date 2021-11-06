import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./component/login/LoginPage";
import RegisterPage from './component/register/RegisterPage';
import FindTeamPage from './component/findteam/FindTeamPage';
import TableAddPage from './component/taleadd/TableAddPage';
import ScorePrevPage from './component/score/ScorePrevPage';
import ScorePage from './component/score/ScorePage';
import IdInputPage from './component/Home/Home';
import ChatRoomPage from './component/ChatRoom/ChatRoom';
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
        <Route path='scorePrev' element={<ScorePrevPage/>}/>
        <Route path='score' element={<ScorePage/>}/>
        <Route path='chat' element={<IdInputPage/>}/>
        <Route path="/:roomId" element={<ChatRoomPage/>} />
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


export default App;
