import styled from "styled-components"
import CompanyLogo from "./Image/CompanyLogo.png"
import { Link } from "react-router-dom";

const Wrap = styled.div``;


const Container = styled.div`
width: 90%;
height: 150px;
display: flex;
justify-content: space-between;
margin: 0px auto;
align-items: center;
`;


const Logo = styled.div`
width: 450px;
height: 150px;
background-image: url(${CompanyLogo});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
`;


const Category = styled.div`
width: 40%;
height: 60px;
border: 4px solid #1A2156;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;

h1 {font-weight:bold; font-size: 25px; color:#1A2156; margin: 0px 25px;}
h1:hover {color: #497FBE; transform: scale(1.1); cursor: pointer;}
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
    </Wrap>
}