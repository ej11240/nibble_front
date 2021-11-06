import "./FindTeamPage.css";
import React, { Component, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar";
import Button from 'react-bootstrap/Button';
import { AiOutlineArrowRight } from "react-icons/ai";
import { } from "react-icons"

import StickyBox from "react-sticky-box";

export default function FindTeamPage() {

    const [datas, setDatas] = useState([]);

    return (
        <div>
            <Navbar />

            <div style={{ display: "flex", alignItems: "flex-start" }}>

                <table style={{ width: '50vw', margin: '0 auto', }}>
                    <tr style={{ alignContent: 'center', height: '100px' }}>
                        <td style={{ alignContent: 'center', width: '60%' }}>
                            <h3 >캡스톤 디자인 팀원 구인</h3>
                        </td>
                        <td style={{ alignContent: 'center', width: '40%', float: 'right', paddingTop: '20px' }}>
                            <button style={{ borderRadius: '24px', backgroundColor: '#ffffff', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}>과목 정보 보기 <AiOutlineArrowRight /></button>
                        </td>
                    </tr>

                    <tr style={{ alignContent: 'center', height: '100px', borderSpacing: '10px' }}>
                        <td colspan='2' style={{ alignContent: 'center', width: '100%' }}>
                            <div style={{ border: '1px solid #DEDEDE', borderRadius: '3px', }}>
                                <div style={{ backgroundColor: "#F5F5F5", paddingLeft: 40, paddingRight: '40px', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <text style={{}}>
                                        캡디 수업 ㅂㅅㅇ교수님 함께할 프엔 백엔 모집합니다
                                    </text>
                                </div>
                                <div style={{ paddingTop: '20px', paddingLeft: 40, paddingRight: '40px', paddingBottom: '20px' }}>
                                    ~~과목 팀플 함께한 팀원을 모집합니다 ~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다.

                                </div>
                                <div style={{ width: '100%', height: '50px' }}>
                                    <div style={{ height: '50px', float: 'right' }} >
                                        <Link to="/chat">
                                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 참가 요청하기 </text></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ height: '20px' }}>
                    </tr>
                    <tr style={{ alignContent: 'center', height: '100px' }}>
                        <td colspan='2' style={{ alignContent: 'center', width: '100%' }}>
                            <div style={{ border: '1px solid #DEDEDE', borderRadius: '3px', }}>
                                <div style={{ backgroundColor: "#F5F5F5", paddingLeft: 40, paddingRight: '40px', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <text style={{}}>
                                        캡디 수업 ㅂㅅㅇ교수님 함께할 프엔 백엔 모집합니다
                                    </text>
                                </div>
                                <div style={{ paddingTop: '20px', paddingLeft: 40, paddingRight: '40px', paddingBottom: '20px' }}>
                                    ~~과목 팀플 함께한 팀원을 모집합니다 ~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다.

                                </div>
                                <div style={{ width: '100%', height: '50px' }}>
                                    <div style={{ height: '50px', float: 'right' }} >
                                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 참가 요청하기 </text></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ height: '20px' }}>
                    </tr>
                    <tr style={{ alignContent: 'center', height: '100px' }}>
                        <td colspan='2' style={{ alignContent: 'center', width: '100%' }}>
                            <div style={{ border: '1px solid #DEDEDE', borderRadius: '3px', }}>
                                <div style={{ backgroundColor: "#F5F5F5", paddingLeft: 40, paddingRight: '40px', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <text style={{}}>
                                        캡디 수업 ㅂㅅㅇ교수님 함께할 프엔 백엔 모집합니다
                                    </text>
                                </div>
                                <div style={{ paddingTop: '20px', paddingLeft: 40, paddingRight: '40px', paddingBottom: '20px' }}>
                                    ~~과목 팀플 함께한 팀원을 모집합니다 ~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다.

                                </div>
                                <div style={{ width: '100%', height: '50px' }}>
                                    <div style={{ height: '50px', float: 'right' }} >
                                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 참가 요청하기 </text></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ height: '20px' }}>
                    </tr>
                    <tr style={{ alignContent: 'center', height: '100px' }}>
                        <td colspan='2' style={{ alignContent: 'center', width: '100%' }}>
                            <div style={{ border: '1px solid #DEDEDE', borderRadius: '3px', }}>
                                <div style={{ backgroundColor: "#F5F5F5", paddingLeft: 40, paddingRight: '40px', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <text style={{}}>
                                        캡디 수업 ㅂㅅㅇ교수님 함께할 프엔 백엔 모집합니다
                                    </text>
                                </div>
                                <div style={{ paddingTop: '20px', paddingLeft: 40, paddingRight: '40px', paddingBottom: '20px' }}>
                                    ~~과목 팀플 함께한 팀원을 모집합니다 ~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다.

                                </div>
                                <div style={{ width: '100%', height: '50px' }}>
                                    <div style={{ height: '50px', float: 'right' }} >
                                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 참가 요청하기 </text></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ height: '20px' }}>
                    </tr>
                    <tr style={{ alignContent: 'center', height: '100px' }}>
                        <td colspan='2' style={{ alignContent: 'center', width: '100%' }}>
                            <div style={{ border: '1px solid #DEDEDE', borderRadius: '3px', }}>
                                <div style={{ backgroundColor: "#F5F5F5", paddingLeft: 40, paddingRight: '40px', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
                                    <text style={{}}>
                                        캡디 수업 ㅂㅅㅇ교수님 함께할 프엔 백엔 모집합니다
                                    </text>
                                </div>
                                <div style={{ paddingTop: '20px', paddingLeft: 40, paddingRight: '40px', paddingBottom: '20px' }}>
                                    ~~과목 팀플 함께한 팀원을 모집합니다 ~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다~~과목 팀플 함께한 팀원을 모집합니다.

                                </div>
                                <div style={{ width: '100%', height: '50px' }}>
                                    <div style={{ height: '50px', float: 'right' }} >
                                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 참가 요청하기 </text></button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>


                </table>

            <div class="filter-tab">
                <article class="card-group-item">
                    <header class="card-header">
                        <h6 class="title">팀원 분류 </h6>
                    </header>
                    <div class="filter-content">
                        <div class="card-body">
                        <form>
                            <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""></input>
                            <span class="form-check-label">
                                프리라이더 제외
                            </span>
                            </label> 
                            <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""></input>
                            <span class="form-check-label">
                                고학점 목표자 포함
                            </span>
                            </label>  
                            <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""></input>
                            <span class="form-check-label">
                                고학점 목표자 제외
                            </span>
                            </label>
                        </form>

                        </div> 
                    </div>
                </article> 
                
                <article class="card-group-item">
                    <header class="card-header">
                        <h6 class="title">모집 상태 </h6>
                    </header>
                    <div class="filter-content">
                        <div class="card-body">
                        <form>
                            <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""></input>
                            <span class="form-check-label">
                                1명 남음
                            </span>
                            </label> 
                            <label class="form-check">
                            <input class="form-check-input" type="checkbox" value=""></input>
                            <span class="form-check-label">
                                2명 남음
                            </span>
                            </label>  
                        </form>

                        </div> 
                    </div>
                </article> 

                <div>
                    <button class="filter-btn">분류</button>
                </div>
            </div> 

            </div>

        </div>
    )
}

