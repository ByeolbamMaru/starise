import styled from "styled-components"
import CompanySymbol02 from "./Image/CompanySymbol02.png"
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrap = styled.div`
width: 100%;
height: 500px;
background: linear-gradient(#1A2156, #497FBE);
`;

const Offical = styled.div``;


const Symbol = styled.div`
width: 150px;
height: 150px;
background-image: url(${CompanySymbol02});
background-repeat: no-repeat;
background-size: 50%;
background-position: center;
margin: 0px auto;
`;


const Text = styled.div`
text-align: center;

text-shadow: 0px 0px 15px #B4C8DC;
h1 {font-Weight:bold; font-Size:60px; color:white;}
h2 {font-Weight:bold; font-Size:80px; color:white;}
`;


const Box = styled.div`
width: 50%;
border-top: 5px solid white;
border-bottom: 5px solid white;
border-radius: 5px;
padding: 25px 25px;
margin: 25px auto;
`;


const Sns = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
margin: 0px auto;

p {font-weight:bold; font-size:60px; color:white;}
a:hover {transition:all 0.5s ease; transform: translateY(-10px);}
`;



export const Footer = () => {
    return <Wrap>
        <Offical>
            <Symbol />
            <Text>
                <h1>STARISE</h1>
                <h2>OFFICAL SNS</h2>
            </Text>
        </Offical>
        <Box>
            <Sns>
            <a href="https://twitter.com/StarNight_Maru" target="_Blank" >
                    <FontAwesomeIcon icon={faXTwitter} style={{fontSize:"70px", color:"white"}} /></a>
                <p>‖</p>
                <a href="https://www.instagram.com/allday_0709/?hl=ko" target="_Blank" >
                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:"70px", color:"white"}} /></a>
                <p>‖</p>
                <a href="https://www.youtube.com/channel/UCM4L9QxnHOTluMQvoC3MbIQ" target="_Blank" >
                    <FontAwesomeIcon icon={faYoutube}  style={{fontSize: "70px", color:"white"}} /></a>
            </Sns>
        </Box>
    </Wrap>
}