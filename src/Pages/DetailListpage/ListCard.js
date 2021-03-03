import React from 'react';
import styled from 'styled-components';
import Imgscrollbox from './Imgscrollbox';
import { IoIosStar } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';

const ListCard = ({ data }) => {
  return (
    <CardBox>
      <h5>
        <Imgscrollbox data={data.img} />
      </h5>
      <Cardtext data={data.img}>
        <h3>
          {data?.location}
          <FiHeart size={20} />
        </h3>
        <h1> {data?.title}</h1>

        <h2>최대인원 {data?.MaxNum}, 주방, 무선인터넷 , 난방, 헤어드라이어 </h2>

        <div>
          <span className="grade">
            <IoIosStar size={25} /> {data?.grade}(3)
          </span>
          <span className="price">${data?.price}/월</span>
        </div>
      </Cardtext>
    </CardBox>
  );
};

export default ListCard;

const CardBox = styled.div`
  display: flex;
  height: 300px;
  padding: 5px;
  border-top: 1px solid rgb(230, 230, 230);
  border-bottom: 1px solid rgb(230, 230, 230);
  h5 {
    width: 50%;
    text-align: center;
    img {
      width: 95%;
      height: 95%;
      border-radius: 20px;
    }
  }
`;

const Cardtext = styled.div`
  position: relative;
  width: 50%;
  padding: 10px;

  h1 {
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  h2 {
    margin-top: 40px;
    color: rgb(160 160 160);
  }
  h3 {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: rgb(160 160 160);
    svg {
      color: red;
    }
  }

  div {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    bottom: 0;
    .price {
      display: block;
      margin-right: 10px;
      padding: 5px;
      font-size: 20px;
    }
    .grade {
      color: rgb(251, 28, 74);
      padding-bottom: 20px;
      font-size: 20px;
    }
  }
`;
