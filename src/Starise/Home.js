import styled from "styled-components"
import { Promotion } from "./Promotion";
import { NOTICE } from "./Category/NOTICE";


const Load = styled.div`
width: 100%;
height: 1440px;
background-color: aliceblue;
`;

export const Home = () => {
    return <Load>
        <Promotion />
        <NOTICE />
    </Load>
}