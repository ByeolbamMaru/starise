import styled, { css, keyframes } from "styled-components"
import StartiseLogo from "./Image/StariseLogo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Wrap = styled.div`
@media screen and (max-width:768px) {
    display: flex;
}
`;


const Container = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
margin: 0px auto;

@media screen and (max-width:768px) {
    width: 100%;
    justify-content: center;
}
`;


const Menu = styled.div`
display: none;

@media screen and (max-width:768px) {
    display: block;
    margin: 7.5px;
    position: absolute;

    .Bars {font-size:30px;}
}
`;


const Logo = styled.div`
width: 300px;
height: 100px;
background-image: url(${StartiseLogo});
background-repeat: no-repeat;
background-size: 100%;

@media screen and (max-width:768px) {
    width: 150px;
    height: 50px;
}
`;


const Category = styled.div`
display: flex;
align-items: center;

h1 {font-weight:bold; font-size: 25px; color:#1A2156; margin:0px 25px;}
h1:hover {color: #497FBE; transform: scale(1); cursor: pointer;}
h1:after {
    display:block;
    content: '';
    border-bottom: 4px solid #497FBE;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}
h1:hover:after {transform: scaleX(1);}

@media screen and (max-width:768px){
    display: none;
}
`;


const slideInMenu = keyframes`
from {
transform:translateX(-100%);
opacity: 0%;
}

to {
transform: translateX(0%);
opacity: 100%;
}
`;

const slideOutMenu = keyframes`
from {
transform: translateX(0%);
opacity: 100%;
}

to {
transform:translateX(-100%);
opacity: 0%;
}
`;


const List = styled.div`
width: 75%;
height: 100%;
background-color: white;
position: fixed;
z-index: 1;
display: none;

h1 {font-size:25px; border-bottom:1px solid gray; margin:25px 25px;}

animation-duration: 0.5s;
animation-timing-function: ease-in;
animation-fill-mode: forwards;

@media screen and (max-width:768px){
    display: block;
}

${({isOpen}) => 
isOpen? css`animation-name: ${slideInMenu};`
: css`animation-name:${slideOutMenu};`
}
`;


const InMenu = styled.div`
width: 100%;
display: flex;
justify-content: end;

.Xmark {font-size:50px; color:#497FBE; margin:7.5px;}
`;


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return <Wrap>
        <Menu>
            <FontAwesomeIcon icon={faBars} className="Bars" onClick={toggleMenu}/>
        </Menu>
        <Container>
            <Link to={"/"}>
            <Logo/></Link>
            <Category>
                <Link to={"ABOUT/"}>
                <h1>ABOUT</h1></Link>
                <Link to={"NOTICE/"}>
                <h1>NOTICE</h1></Link>
                <Link to={"TALENT/"}>
                <h1>TALENT</h1></Link>
                <Link to={"GUIDELINE/"}>
                <h1>GUIDELINE</h1></Link>
            </Category>
        </Container>
        <List isOpen={showMenu}>
            <InMenu>
                <FontAwesomeIcon icon={faXmark} className="Xmark" onClick={toggleMenu}/>
            </InMenu>
            <Link to={"ABOUT/"}>
            <h1>ABOUT</h1></Link>
            <Link to={"NOTICE/"}>
            <h1>NOTICE</h1></Link>
            <Link to={"TALENT/"}>
            <h1>TALENT</h1></Link>
            <Link to={"GUIDELINE/"}>
            <h1>GUIDELINE</h1></Link>
        </List>
    </Wrap>
}