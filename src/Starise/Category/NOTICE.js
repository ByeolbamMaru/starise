import styled from "styled-components"
import { Symbol } from "../Symbol"

const Wrap = styled.div`
width:100%;
height: 75vh;

`;


const Container = styled.div``;


const Panel = styled.div``;


const Date = styled.div``;


export const NOTICE = () => {
    return <Wrap>
        <Symbol CS = "NOTICE"/>
        <Container>
            <Panel></Panel>
            <Date></Date>
        </Container>
    </Wrap>
}