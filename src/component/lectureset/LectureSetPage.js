import React, { Component, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { BiUserCircle } from "react-icons/bi";
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@material-ui/core/Button';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";
import PropTypes from 'prop-types';


export default function LectureSetPage() {

    const [list, setList] = useState([]);

    const sendServerLogin = () => {

        // axios ...
        axios
            .post("http://192.168.12.94" + ":8080/api/lecture_list" + localStorage.getItem("userIdx"), {

            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
            )
            .then(function (response) {
                // localStorage.setItem("userIdx", response.data.userIdx);
                // localStorage.setItem("email", id);
                // localStorage.setItem("name",response.data.test_id);
                setList(response.data.lecture_list);
            })

    }

    useEffect(() => {
        sendServerLogin();
    }, [])

    return (
        <div>
            {/* <NavBar/> */}
            <div className="Loginpage">
                <div style={{ textAlign: 'center', height: '100vh', marginTop: '150px' }}>
                    <div style={{ alignSelf: 'center' }}>
                        <img alt="img" src="https://menu.mt.co.kr/moneyweek/thumb/2020/10/26/06/2020102617278019215_1.jpg" />
                    </div>
                    <div style={{ display: 'inline-block' }}>
                        강의를 선택해주세요!
                        <Link to='/findteam'>
                            <div style={{ alignSelf: 'center', boxShadow: '0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%)', width: '500px', paddingTop: '20px', paddingBottom: '20px' }}>
                                캡스톤 디자인
                            </div>
                        </Link>
                        {list.map(t => {
                            return (
                                <Link to='/findteam'>
                                    <div style={{ alignSelf: 'center', boxShadow: '0 1px 1px rgb(0 0 0 / 11%), 0 2px 2px rgb(0 0 0 / 11%), 0 4px 4px rgb(0 0 0 / 11%), 0 6px 8px rgb(0 0 0 / 11%), 0 8px 16px rgb(0 0 0 / 11%)', width: '500px', paddingTop: '20px', paddingBottom: '20px' }}>
                                        {t}
                                    </div>
                                </Link>
                            )
                        }

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}