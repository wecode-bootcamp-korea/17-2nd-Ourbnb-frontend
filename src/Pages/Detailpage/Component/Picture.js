import React from 'react';
import styled from 'styled-components';
//
const Picture = ({ result }) => {
  return (
    <Images>
      <img
        className="bigimg"
        src={result.firstImg && result.firstImg}
        alt="room"
      />
      <ImageSmallPart>
        <img src={result.img && result.img[0]} alt="room" />
        <img src={result.img && result.img[1]} alt="room" />
        <img src={result.img && result.img[2]} alt="room" />
        <img src={result.img && result.img[3]} alt="room" />
      </ImageSmallPart>
    </Images>
  );
};

export default Picture;

const Images = styled.div`
  display: flex;
  padding-top: 24px;

  img {
    width: 625px;
    height: 468px;
    margin: 0 10px 10px 0;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const ImageSmallPart = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 630px;
  height: 310px;

  img {
    position: relative;
    width: 305px;
    height: 229px;
    margin: 0 0 10px 10px;
    object-fit: cover;
  }
`;
