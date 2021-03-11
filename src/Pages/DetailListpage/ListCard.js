import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import Imgscrollbox from './Imgscrollbox';
import { IoIosStar } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';

const ListCard = ({ data, initialdata }) => {
  const history = useHistory();
  const goToDetail = () => {
    history.push({
      pathname: `/detail/${data.id}`,
      state: { initialstate: initialdata },
    });
  };

  return (
    <CardBox>
      <h5>
        <Imgscrollbox data={data?.img} />
      </h5>
      <Cardtext data={data?.img} onClick={goToDetail}>
        <h3>
          {data?.location}
          <FiHeart size={20} />
        </h3>
        <h1> {data?.title}</h1>
        <p>
          최대인원 {data?.MaxNum}명,
          <span>
            침대갯수:{data?.bed}개, 침실:{data?.bedroom}개, 욕실
            {data?.bathroom}개
          </span>
        </p>
        ,<h2>주방, 무선인터넷 , 난방, 헤어드라이어, 와이파이</h2>
        <div>
          <span className="grade">
            {data?.grade !== '0' && (
              <>
                <IoIosStar size={25} />
                <span className="review"> {data?.grade}</span>
                <span className="reviewnum"> ({data?.gradeNum})</span>
              </>
            )}
          </span>
          <span className="price">￦ {data?.price}/박</span>
        </div>
      </Cardtext>
    </CardBox>
  );
};

export default withRouter(ListCard);

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
    margin: 20px 0 20px 0;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    display: inline;
    padding-top: 8px;
    border-top: 1px solid gray;
    color: black;
    font-weight: 400;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 30px;
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
      .review {
        color: black;
      }
      .reviewnum {
        font-size: 15px;
        font-weight: 00;
        color: gray;
      }
    }
  }
`;
