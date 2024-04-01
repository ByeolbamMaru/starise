import styled from "styled-components";
import StariseSymbol from "./Image/StariseSymbol.png"

const Conatainer = styled.div`
`;


const Iamge = styled.div`
width: 200px;
height: 200px;
background-image: url(${StariseSymbol});
background-repeat: no-repeat;
background-size: 50%;
background-position: bottom;
margin: 0px auto;
`;

const Text = styled.div`
background: linear-gradient(#000000, #1A2156, #497FBE);
background-clip: text;
text-align: center;

h1 {font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-weight:bold; font-size:100px; color:transparent;}
`;


export const Symbol = ({CS}) => {
    return <Conatainer>
        <Iamge />
        <Text>
            <h1>{CS}</h1>
        </Text>
    </Conatainer>
}