import styled from "styled-components"
import { Symbol } from "../Symbol";

const Coantainer = styled.div`
width: 100%;
height: 200vh;
background-color: aliceblue;

white-space: pre-line;
h1 {font-weight:bold; font-size:40px; color:#1A2156; text-align: center;}
h2 {font-weight:bold; text-align:center}
p {font-size: 20px; margin-top:40px}
`;

const Box = styled.div`
width: 60%;
border: 0px solid black;
margin: 0px auto;
`;


const CreativeGudiline = styled.div``;


const CreativeAtivityGudieline = styled.div``;


const FanNotice = styled.div``;


const Questions = styled.div``;



export const GUIDELINE = () => {
    return <Coantainer>
        <Symbol CS={""} />
        <h2>[2024.03.28 Ver.]</h2>
        <CreativeGudiline>\
            <h1>「2차 창작 가이드라인」</h1>
            <Box>
                <p>안녕하세요<br/>반갑습니다<br/><br/>어서오세요</p>
            </Box>
        </CreativeGudiline>
        <Symbol CS={""} />
        <CreativeAtivityGudieline>
            <h1>「2차 창작 활동 가이드라인」</h1>
            <Box>
                <p>안녕하세요<br/>반갑습니다<br/><br/>어서오세요</p>
            </Box>
        </CreativeAtivityGudieline>
        <Symbol CS={""} />
        <FanNotice>
        <h1>「대외 활동에 대한 공지사항」</h1>
            <Box>
                <p>안녕하세요<br/>반갑습니다<br/><br/>어서오세요</p>
            </Box>
        </FanNotice>
        <Symbol CS={""} />
        <Questions>
        <h1>「문의 및 불명확한 사항」</h1>
            <Box>
                <p>안녕하세요<br/>반갑습니다<br/><br/>어서오세요</p>
            </Box>
        </Questions>
    </Coantainer>
}