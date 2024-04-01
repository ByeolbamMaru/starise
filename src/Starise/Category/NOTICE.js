import styled from "styled-components"
import { Symbol } from "../Symbol";
import CompanyLogo from "./Image/CompanyLogo.png"

const Wrap = styled.div`
width: 100%;
height: 200vh;
background-color: aliceblue;
`;

const Xbar = styled.div`
height: 10px;
background: linear-gradient(silver,aliceblue);
border-top: 1px solid white;
`;


const Container = styled.div``;


const Box = styled.div`
width: 80%;
height: 320px;
border: 2px solid black;
margin: 25px auto;
`;


const Image = styled.div`
width: 400px;
height: 300px;
background-image: url(${CompanyLogo});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
border: 2px solid black;
margin: 7.5px 10px;
`;


export const NOTICE = () => {
    return <Wrap>
        <Xbar />
        <Symbol CS = "NOTICE"/>
        <Container>
            <Box>
                <Image />
            </Box>
            <Box>
                <Image />
            </Box>
            <Box>
                <Image />
            </Box>
        </Container>
    </Wrap>
}