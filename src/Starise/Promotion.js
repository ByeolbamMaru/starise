import styled from "styled-components"
import Slider from "react-slick"
import Sample01 from "./Image/Sample01.jpg"
import Sample02 from "./Image/Sample02.jpg"
import Sample03 from "./Image/Sample03.jpg"


const Container = styled.div`
overflow:hidden
`;


const StyledSlider = styled(Slider)``;


const ImageContainer = styled.div``;


const Image = styled.img`
width: 100%;
`;

const Images = [
  { id: 1, url: Sample01 },
  { id: 2, url: Sample02 },
  { id: 3, url: Sample03 },
];


export const Promotion = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Container>
        <StyledSlider {...settings}>
          {Images.map(Banner => {
            return (
              <div key={Banner.id}>
                <ImageContainer>
                  <Image src={Banner.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
}