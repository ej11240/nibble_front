import React from "react";
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
                Logo
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