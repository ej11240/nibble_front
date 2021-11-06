import "./RegisterPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { BiUserCircle } from "react-icons/bi";
import InputAdornment from '@mui/material/InputAdornment';
import logo from '../../img/timetable.png'

export default function RegisterPage() {

    // let history = useHistory();

    const [email, setEmail] = useState('');
    const onIdChange = (e) => {
        setEmail(e.target.value);
    }
    const [pw, setPw] = useState('');
    const onPwChange = (e) => {
        setPw(e.target.value);
    }
    const[name, setName] = useState('');
    const onNameChange=(e)=>{
        setName(e.target.value);
    }



    const sendServerRegister = () => {

        // axios ...
        axios
            .post("http://192.168.12.94" + ":8080/api/user/register", {
                email:email,
                password:pw,
                name:name
        }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
            )
            .then(function (response) {
                localStorage.setItem("userIdx", response.data.userIdx);
                localStorage.setItem("email", email);
                localStorage.setItem("name",response.data.test_id);
            })

    }


    return (
        <div>
            {/* <NavBar/> */}
            <div className="Loginpage">
                <div style={{ textAlign: 'center', height: '100vh', marginTop: '150px' }}>
                    <div style={{ alignSelf: 'center' }}>
                    <img width="100px" alt="img" src={logo} /><br />
                    <span class="mb-4 font-weight-bold">TEAMTABLE</span>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="email"
                            style={{ width: '300px' }}
                            variant="standard"
                            value={email}
                            onChange={onIdChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <BiUserCircle />
                                </InputAdornment>
                            } />
                        <div style={{ height: '40px', }}></div>
                        <TextField
                            id="standard-password-input"
                            label="비밀번호"
                            style={{ width: '300px' }}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            value={pw}
                            onChange={onPwChange}
                        />
                        <div style={{ height: '40px', }}></div>
                        <TextField
                            id="standard-password-input"
                            label="비밀번호 확인"
                            style={{ width: '300px' }}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <div style={{ height: '40px', }}></div>
                        <TextField
                            id="standard-basic"
                            label="닉네임"
                            style={{ width: '300px' }}
                            variant="standard"
                            value={name}
                            onChange={onNameChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <BiUserCircle />
                                </InputAdornment>
                            } />
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Link to="/" className="Login_link">
                            <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { sendServerRegister();} }>
                                <text style={{  fontSize:'20px', color: '#ffffff', paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px', paddingBottom: '5px' }}> 회원가입 </text>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    
}