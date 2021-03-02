import React from 'react';
import styled from 'styled-components';
//
const Picture = ({ data }) => {
  //console.log(data.img);
  //const [click, setClick] = useState(false);
  return (
    <Images>
      <img className="bigimg" src={data.firstImg && data.firstImg} alt="room" />
      <ImageSmallPart>
        {/* {data.img &&
          data.img.map(img => {
            return <img src={img} alt="img" />;
          })} */}
        <img src={data.img && data.img[0]} alt="room" />
        <img src={data.img && data.img[1]} alt="room" />
        <img src={data.img && data.img[2]} alt="room" />
        <img src={data.img && data.img[3]} alt="room" />
      </ImageSmallPart>
      {/* <FullImg onClick={() => setClick(!click)}>:: 사진 모두보기</FullImg>
      {click && <SliderImg img={data.img} />} */}
    </Images>
  );
};

export default Picture;

const Images = styled.div`
  display: flex;
  //position: relative;
  //background-color: tomato;
  padding-top: 24px;
  //height: 340px;

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

// const FullImg = styled.button`
//   width: 130px;
//   height: 35px;
//   background-color: skyblue;
//   position: absolute;
//   right: 70px;
//   bottom: 100px;
//   border-radius: 5px;
//   font-size: 14px;
//   background-color: olive;
// `;
