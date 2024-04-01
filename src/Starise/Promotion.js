import styled from "styled-components"
import Slider from "react-slick";
import Sample01 from "./Image/Sample01.jpg"
import Sample02 from "./Image/Sample02.jpg"
import Sample03 from "./Image/Sample03.jpg"

const Container = styled.div`
overflow:hidden`;


const StyledSlider = styled(Slider)``;


const Image = styled.img`
width: 100%;
`;


export const Promotion = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (<Container>
    <StyledSlider {...settings}>
      <a href="#/NOTICE/" target="_blank">
      <Image src={Sample01} /></a>
      <a href="#/NOTICE/" target="_blank">
      <Image src={Sample02} /></a>
      <a href="#/NOTICE/" target="_blank">
      <Image src={Sample03} /></a>
    </StyledSlider>
  </Container>
  )
}