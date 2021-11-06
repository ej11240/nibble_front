import "./RegisterPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { BiUserCircle } from "react-icons/bi";
import InputAdornment from '@mui/material/InputAdornment';

export default function RegisterPage() {

    // let history = useHistory();

    const logintomain = React.useRef(null);


    const [id, setId] = useState('');
    const onIdChange = (e) => {
        setId(e.target.value);
    }
    const [pw, setPw] = useState('');
    const onPwChange = (e) => {
        setPw(e.target.value);
    }

    const sendServerLogin = () => {

        // axios ...
    }


    return (
        <div>
            {/* <NavBar/> */}
            <div className="Loginpage">
                <div style={{ textAlign: 'center', height: '100vh', marginTop: '150px' }}>
                    <div style={{ alignSelf: 'center' }}>
                        <img alt="img" src="https://menu.mt.co.kr/moneyweek/thumb/2020/10/26/06/2020102617278019215_1.jpg" />
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="email"
                            style={{ width: '300px' }}
                            variant="standard"
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
                            startAdornment={
                                <InputAdornment position="start">
                                    <BiUserCircle />
                                </InputAdornment>
                            } />
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Link to="/" className="Login_link">
                            <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}>
                                <text style={{  fontSize:'20px', color: '#ffffff', paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px', paddingBottom: '5px' }}> 회원가입 </text>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    
}