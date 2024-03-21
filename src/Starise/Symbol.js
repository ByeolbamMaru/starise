import styled from "styled-components"
import CompanySymbol from "./Image/CompanySymbol.png"

const Title = styled.div`

`;


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;


const Logo = styled.div`
width: 150px;
height: 150px;
background-image: url(${CompanySymbol});
background-repeat: no-repeat;
background-size: 50%;
background-position: bottom;
margin: 0px auto;
`;


const Text = styled.div`
background: linear-gradient(#000000, #1A2156, #497FBE);
text-align: center;
margin: -85px;

font-weight: bold;
font-size: 80px;
color:transparent;
background-clip:text;
`;

const Shadow = styled.div`
color: transparent;
text-align: center;

font-weight: bold;
font-size: 80px;
-webkit-text-stroke:1px #1A2156;
`;

export const Symbol = ({CS}) => {
    return <Title>
        <Logo></Logo>
        <Container>
            <Shadow>{CS}</Shadow>
            <Text>{CS}</Text>
        </Container>

    </Title>
}