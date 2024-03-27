import styled, { css, keyframes } from "styled-components"
import CompanyLogo from "./Image/CompanyLogo.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Wrap = styled.div``;


const Container = styled.div`
width: 95%;
height: 150px;
display: flex;
justify-content: space-between;
margin: 0px auto;
align-items: center;

@media screen and (max-width:768px){
display: flex;
justify-content
}
`;


const Logo = styled.div`
width: 300px;
height: 100px;
background-image: url(${CompanyLogo});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;

@media screen and (max-width:768px){
width: 200px;
height: 50px;
}
`;

const Category = styled.div`
width: 40%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;

h1 {font-weight:bold; font-size: 25px; color:#1A2156; margin: 0px 25px;}
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
position: absolute;
width: 1px;
height: 1px;
margin: -1px;
overflow: hidden;
clip-path: polygon(0 0, 0 0, 0 0);

}
`;


const Menu = styled.div``;


const slideInMenu = keyframes`
from {
transform:translateX(-100%);
}

to {
transform: translateX(0%);
}
`;

const slideOutMenu = keyframes`
from {
transform: translateX(0%);
}

to {
transform:translateX(-100%);
}
`;


const List = styled.div`
width: 500px;
height: 100%;
background-color: snow;
position: fixed;
z-index: 1;

h1 {font-weight:bold; font-size:40px; margin:20px 0px;}

animation-duration: 0.5s;
animation-timing-function: ease;
animation-fill-mode: forwards;

${({isOpen}) => 
isOpen? css`animation-name: ${slideInMenu};`
: css`animation-name:${slideOutMenu};`
}
`;

const XBar = styled.div`
width: 100%;
border: 0.5px solid black;
`;

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }

    return <Wrap>
        <Container>
            <Menu>
                <FontAwesomeIcon icon={faBars} style={{fontSize:"40px"}} onClick={toggleMenu}/>
            </Menu>
            <Link to={"/"}>
            <Logo /></Link>
            <Category>
                <Link to={"/ABOUT"}>
                <h1>ABOUT</h1></Link>
                <Link to={"/NOTICE"}>
                <h1>NOTICE</h1></Link>
                <Link to={"/TALENT"}>
                <h1>TALENT</h1></Link>
                <Link to={"/GUIDELINE"}>
                <h1>GUIDELINE</h1></Link>
            </Category>
        </Container>
        <List isOpen={showMenu}>
            <Link to={"/ABOUT"}>
            <h1>ABOUT</h1></Link>
            <XBar />
            <Link to={"NOTICE"}>
            <h1>NOTICE</h1></Link>
            <XBar />
            <Link to={"/TALENT"}>
            <h1>TALENT</h1></Link>
            <XBar />
            <Link to={"GUIDELINE"}>
            <h1>GUIDELINE</h1></Link>
            <XBar />
        </List>
    </Wrap>
}