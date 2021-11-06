import React from 'react';
import UserReq from './UserReq';
import Navbar from "../navbar";

export default function MyInfo() {
  function handleClick(e) {
    e.preventDefault();
    alert('move to profile edit');
  }
  var userID = 1;
  return (
    <div>
      <div><Navbar /></div>
      <div className="MyInfo">
        <UserReq num='UserInfo' user={userID}></UserReq>
        <UserReq num='Frame' user={userID}></UserReq>
        <UserReq num='Participation' user={userID}></UserReq>
        <UserReq num='Comment' user={userID}></UserReq>
        <div style={{position:"absolute",left:"630px",top:"560px"}}>
          <button onClick={handleClick}>edit profile</button>
        </div>
      </div>
    </div>
  );
}
