import styled from "styled-components";
import ComapanySymbol from "./Image/CompanySymbol.png"

const Conatainer = styled.div``;


const Iamge = styled.div`
width: 200px;
height: 200px;
background-image: url(${ComapanySymbol});
background-repeat: no-repeat;
background-size: 50%;
background-position: bottom;
margin: 0px auto;
`;


export const Symbol = ({CS}) => {
    return <Conatainer>
        <Iamge>{CS}</Iamge>
    </Conatainer>
}