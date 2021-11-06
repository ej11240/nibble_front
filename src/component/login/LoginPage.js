import "./LoginPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { BiUserCircle } from "react-icons/bi";
import InputAdornment from '@mui/material/InputAdornment';
import logo from '../../img/timetable.png'

export default function LoginPage() {

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
                <div style={{ textAlign: 'center', height: '100vh', marginTop: '200px' }}>
                    <div style={{ alignSelf: 'center' }}>
                        <img width="100px" alt="img" src={logo} /><br />
                        <span class="mb-4 font-weight-bold">TEAMTABLE</span>
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            label="이메일"
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
                        <div style={{height:'20px', marginTop:'50px'}} >
                            <Link to="/register" ><text style={{}}>회원가입</text></Link>
                        </div>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Link to="/tableadd" className="Login_link">
                            <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}>
                                <text style={{  fontSize:'20px', color: '#ffffff', paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px', paddingBottom: '5px' }}> Login </text>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
    
}