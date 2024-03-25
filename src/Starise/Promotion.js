import styled from "styled-components";
import Sample01 from "./Image/Sample01.jpg"
import Sample02 from "./Image/Sample02.jpg"
import Sample03 from "./Image/Sample03.jpg"

const Frame = styled.div`
width: 100%;
height: 720px;
background-image: url(${Sample02});
`;

const Container = styled.div``;

const Slide = styled.div``;


export const Promotion = () => {


    return <Frame>
            <Container>
                <Slide>
                </Slide>
            </Container>
        </Frame>
};