import styled, { keyframes } from "styled-components"
import Companysymbol02 from "./Image/CompanySymbol02.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Wrap = styled.div`
width: 100%;
height: 500px;
background: linear-gradient(#497FBE, #1A2156);

@media screen and (max-width:768px) {
height: 350px;
}
`;



const Container = styled.div`
h2 {font-weight:bold; font-size:30px; color:white; margin-left:25px}

@media screen and (max-width:768px) {
    h2 {font-weight:bold; font-size:25px; color:white; text-align:center}
    }
`;


const Logo = styled.div`
width: 200px;
height: 200px;
background-image: url(${Companysymbol02});
background-repeat: no-repeat;
background-size: 75%;
background-position: bottom;
margin: 0px auto;

@media screen and (max-width:768px) {
    width: 120px;
    height: 120px;
}
`;



const Text = styled.div`
text-align: center;

h1 {font-weight:bold; font-size:75px; color:white}

@media screen and (max-width:768px) {
    h1 {font-size:50px;}
}
`;


const Shadow = styled.div`
text-align: center;

-webkit-text-stroke: 0.5px white;
h1 {font-weight:bold; font-size:75px; color:transparent; margin-top: -70px}

@media screen and (max-width:768px) {
    h1 {font-size:50px; margin-top: -45px}
}
`;


const Xbar = styled.div`
width: 750px;
border: 1px solid white;
margin: 25px auto;

@media screen and (max-width:768px) {
    width: 450px;
}
`;


const Sns = styled.div`
width: 25%;
display: flex;
justify-content: space-between;
margin: 25px auto;

.icon {
    font-size: 75px;
    color: white;
    
    animation: FadeIn;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

@keyframes FadeIn {
    from {
        transform:translateY(100px);
        opacity: 0%;}

    to {
        transform:translateY(0px);
        opacity: 100%}
}
}

a:hover {transition: all 0.1s ease-in; transform:translateY(-10px)}

@media screen and (max-width:768px) {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 25px auto;

    .icon {
        font-size: 50px;}
}
`;


export const Footer = () => {
    return <Wrap>
        <Container>
            <Logo></Logo>
            <Text>
                <h1>OFFICIAL SNS</h1>
            </Text>
            <Shadow>
                <h1>OFFICIAL SNS</h1>
            </Shadow>
            <Xbar />
            <Sns>
                <a href="https://twitter.com/StarNight_Maru" target="_Blank">
                    <FontAwesomeIcon icon={faXTwitter} className="icon"/></a>
                <a href="https://www.instagram.com/allday_0709/?hl=ko" target="_Blank" >
                    <FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                <a href="https://www.youtube.com/channel/UCM4L9QxnHOTluMQvoC3MbIQ" target="_Blank" >
                    <FontAwesomeIcon icon={faYoutube}  className="icon"/></a>
            </Sns>
        </Container>
    </Wrap>
}