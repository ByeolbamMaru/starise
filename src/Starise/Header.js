import styled from "styled-components"
import CompanyLogo from "./Image/CompanyLogo.png"
import { Link } from "react-router-dom";

const Wrap = styled.div``;


const Container = styled.div``;


const XBar = styled.div`
width: 100%;
height: 5px;
background: linear-gradient(gray, white);
`;


const Logo = styled.div`
width: 600px;
height: 200px;
background-image: url(${CompanyLogo});
background-repeat: no-repeat;
background-size: 80%;
background-position: center;
margin: 0px auto;
`;


const Category = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 25px auto;

p {font-weight:bold; font-size:40px;}
h1 {font-weight:bold; font-size:40px;}
h1:hover {color: #497FBE; cursor: pointer;}
h1:after {
    display:block;
    content: '';
    border-bottom: 4px solid #497FBE;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
}
h1:hover:after {transform: scaleX(1);}
`;


export const Header = () => {
    return <Wrap>
        <Container>
            <Link to={"/"}>
            <Logo></Logo></Link>
            <XBar/>
            <Category>
                <p>‖</p>
                <Link to={"/ABOUT"}>
                <h1>ABOUT</h1></Link>
                <p>‖</p>
                <Link to={"/NOTICE"}>
                <h1>NOTICE</h1></Link>
                <p>‖</p>
                <Link to={"/TALENT"}>
                <h1>TALENT</h1></Link>
                <p>‖</p>
                <Link to={"/CONTENT"}>
                <h1>CONTENT</h1></Link>
                <p>‖</p>
                <Link to={"/GUIDELINE"}>
                <h1>GUIDELINE</h1></Link>
                <p>‖</p>
            </Category>
        </Container>
    </Wrap>
}