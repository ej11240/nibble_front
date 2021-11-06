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

                <StickyBox offsetTop={20} offsetBottom={20} style={{  padding: '10px', margin: '20px', marginTop: '100px' }} >
                    <div style={{ border: '1px solid #DEDEDE', padding: '10px' }}>
                        <h3>팀원 분류</h3>
                        <div style={{ backgroundColor: '#F5F5F5' }}>
                        <div style={{height:'10px', }}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">프리라이더 제외</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">고학점 목표자 제외</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">Default unchecked</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                        </div>

                        <h3>모집 상태</h3>
                        <div style={{ backgroundColor: '#F5F5F5' }}>
                        <div style={{height:'10px', }}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">모집 완료 제외</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">..</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                            <div>
                                {/* <div class="custom-control custom-checkbox"> */}
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                <label class="custom-control-label" for="defaultUnchecked">..</label>
                                {/* </div> */}
                            </div>
                            <div style={{height:'10px'}}></div>
                        </div>
                    </div>
                    <div style={{margin:'5px'}}>
                        <button style={{ borderRadius: '24px', backgroundColor: '#000000', paddingTop: '5px', paddingBottom: '5px', float: 'right' }} onClick={() => { }}><text style={{ color: '#ffffff' }}> 구인 글 작성 </text></button>
                    </div>
                </StickyBox>

            </div>

        </div>
    )
}
