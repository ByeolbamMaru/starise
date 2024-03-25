import styled from "styled-components"
import Companysymbol02 from "./Image/CompanySymbol02.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import reset from "styled-reset";

const Wrap = styled.div`
width: 100%;
height: 500px;
background: linear-gradient(#1A2156, #497FBE);
`;


const Container = styled.div`
h2 {font-weight:bold; font-size:30px; color:white; margin-left:25px}
`;


const Logo = styled.div`
width: 200px;
height: 200px;
background-image: url(${Companysymbol02});
background-repeat: no-repeat;
background-size: 75%;
background-position: bottom;
margin: 0px auto;
`;


const Text = styled.div`
text-align: center;

h1 {font-weight:bold; font-size:75px; color:white}
`;


const Shadow = styled.div`
text-align: center;

text-shadow: 0px 0px 10px white;
-webkit-text-stroke: 1px white;
h1 {font-weight:bold; font-size:75px; color:transparent; margin-top: -70px}
`;


const Xbar = styled.div`
width: 750px;
border: 1px solid white;
margin: 25px auto;

`;


const Sns = styled.div`
width: 25%;
display: flex;
justify-content: space-between;
margin: 25px auto;

animation-name: Dawn;
@keyframes Dawn {
    from {transform:translateY(100px);}
}
animation-duration: 0.5s;
animation-timing-function: ease-in;
animation-delay: 0s;
animation-iteration-count: 1;
animation-direction: normal;

a:hover {transition: all 0.5s ease-in; transform:translateY(-10px)}
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
                <a href="https://twitter.com/StarNight_Maru" target="_Blank" >
                    <FontAwesomeIcon icon={faXTwitter} style={{fontSize:"70px", color:"white"}} /></a>
                <a href="https://www.instagram.com/allday_0709/?hl=ko" target="_Blank" >
                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:"70px", color:"white"}} /></a>
                <a href="https://www.youtube.com/channel/UCM4L9QxnHOTluMQvoC3MbIQ" target="_Blank" >
                    <FontAwesomeIcon icon={faYoutube}  style={{fontSize: "70px", color:"white"}} /></a>
            </Sns>
            <h2>E-mail - allday0709@naver.com</h2>
        </Container>
    </Wrap>
}