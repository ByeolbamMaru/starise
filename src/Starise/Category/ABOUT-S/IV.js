import styled from "styled-components"
import CompanyLogo02 from "../Image/CompanyLogo02.png" 
import Xbar02 from "../Image/Xbar02.png"

const Wrap = styled.div`
width: 100%;
height: 750px;
background: linear-gradient(#1A2156, #497FBE );
`;


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;


const Logo = styled.div`
width: 600px;
height: 300px;
background-image: url(${CompanyLogo02});
background-repeat: no-repeat;
background-size: 100%;
background-position: bottom;
`;

const XBar = styled.div`
width: 450px;
height: 150px;
background-image: url(${Xbar02});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
`;


const Text = styled.div`
text-align: center;
line-height: 50px;
p {font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size: 25px; color: white}
`;


export const IV = () => {
    return <Wrap>
        <Container>
            <Logo />
            <XBar />
            <Text>
                <p>밤이 내리고 별이 떠오르는 것을 형상화한 저희 스타라이즈(STARISE)는</p>
                <p>아직 밤하늘에서 발견하지 못한 별들을 찾아 빛나게 하는 것이 목표입니다.</p>
                <p>Vtuber라는 은하단의 세계 속에서 자신만의 반짝임으로 사람들을 이어주는 별빛</p>
                <p>여러분들과 같은 밤하늘을 바라보며 세상에 가장 빛나는 별빛 보여주고 싶습니다</p>
            </Text>
        </Container>
    </Wrap>
}