import styled from "styled-components"
import { Promotion } from "./Promotion";
import { Footer } from "./Footer";


const Load = styled.div`
background-color: aliceblue;
`;

export const Home = () => {
    return <Load>
        <Promotion />
        <Footer />
    </Load>
}