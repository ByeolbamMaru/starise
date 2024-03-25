import styled from "styled-components"
import { Promotion } from "./Promotion";


const Load = styled.div`
width: 100%;
height: 200vh;
`;

export const Home = () => {
    return <Load>
        <Promotion />
    </Load>
}