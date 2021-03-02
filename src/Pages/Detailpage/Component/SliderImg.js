import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: pink;
`;

export default class SliderImg extends Component {
  render() {
    console.log(this.props.img);
    const settings = {
      dots: true,
      infinte: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { img } = this.props;
    return (
      <Slider {...settings}>
        <Container>
          {img.map(img => (
            <img srt={img} alt="room" />
          ))}
        </Container>
      </Slider>
    );
  }
}
