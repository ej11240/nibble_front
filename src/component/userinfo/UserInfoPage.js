import React from 'react';
import UserReq from './UserReq';
import Navbar from "../navbar";

export default function UserInfo() {
  var data
  const onChange = (e) => {
    data = e.target.value
  }
  function handleClick(e) {
    e.preventDefault();
    //<UserReq num='ChangeVal' user={data}></UserReq>
    alert('Comment Leaved Successfully');
  }
  var userID = 2;
  return (
    <div className="UserInfo">
      <div><Navbar /></div>
      <UserReq num='UserInfo' user={userID}></UserReq>
      <UserReq num='Frame' user={userID}></UserReq>
      <UserReq num='Participation' user={userID}></UserReq>
      <UserReq num='Comment' user={userID}></UserReq>
      <div style={{position:"absolute",left:"480px",top:"830px"}}>
        <input onChange={onChange} type="text" size="114"/>
        <button onClick={handleClick}>leave comment</button>
      </div>
    </div>
  );
}
