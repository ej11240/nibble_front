import React from "react";
import logo from '../../img/timetable.png'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

import { AiOutlineBell, AiOutlineQuestionCircle  } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";


const Navbar = () => {

    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img width="50px" alt="img" src={logo} />
                <span class="font-weight-bold ml-2">TEAMTABLE</span>
            </NavLogo>
            <Bars />

            <NavMenu>
                
                <NavLink to="/register" activeStyle>
                    <AiOutlineBell />
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    <AiOutlineQuestionCircle />
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    <BiUserCircle />
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/register">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;