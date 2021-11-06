// AiFillPlusCircle
import React, { Component, useState } from "react";
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

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


export default function TableAddPage(props) {



    const { classes } = props;

    return (
        <div className="Loginpage">
            <div style={{ textAlign: 'center', height: '100vh', marginTop: '400px' }}>
                <div style={{ alignSelf: 'center' }}>
                    <img width="350px" alt="img" src="https://menu.mt.co.kr/moneyweek/thumb/2020/10/26/06/2020102617278019215_1.jpg" />
                </div>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="black" component="span">
                            <img src='https://icons-for-free.com/iconfiles/png/512/add+box+24px-131985189484366930.png' height='100px' />
                        </Button>
                    </label>

                </div>

                <div style={{ marginTop: '50px' }}>
                    <Link to="/findteam" className="Login_link">
                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}>
                            <text style={{ fontSize: '20px', color: '#ffffff', paddingLeft: '40px', paddingRight: '40px', paddingTop: '5px', paddingBottom: '5px' }}> Login </text>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}