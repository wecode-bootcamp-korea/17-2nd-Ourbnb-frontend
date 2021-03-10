import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const BookingCard = ({ result, initialstate }) => {
  const [drop, setDrop] = useState(false);

  const history = useHistory();

  let firstDay = new Date(initialstate.startDate);
  let lastDay = new Date(initialstate.endDate);

  let countDay = Math.ceil(
    (lastDay.getTime() - firstDay.getTime()) / (1000 * 3600 * 24)
  );

  const goToPurchase = () => {
    if (localStorage.getItem('access_token')) {
      history.push({
        pathname: '/Payment',
        state: {
          initialstate: initialstate,
          onedayPrice: result.onedayPrice,
          cleaningFee: result.cleaningFee,
          totalPrices: [totalPriceBack, totalPrices],
          title: result.title,
          accommodation_id: result.id,
          countDay: countDay,
          totalAvg: result.totalAvg,
          firstImg: result.firstImg,
        },
      });
    } else {
      alert('로그인해주세요');
      history.push('/');
    }
    window.scrollTo({ top: 0 });
  };

  const totalPriceBack = result.cleaningFee + result.onedayPrice * countDay;
  const totalPrices = Number(
    result.cleaningFee * 1 + result.onedayPrice * countDay
  ).toLocaleString();
  console.log('뱍', totalPriceBack);
  console.log(totalPrices);
  return (
    <Card>
      <Header>
        <Oneday>
          ₩
          {result.onedayPrice &&
            `${Number(result.onedayPrice).toLocaleString()}`}
        </Oneday>
        <Day>/박</Day>
      </Header>
      <CheckBox>
        <CheckIn>
          체크인
          <p className="firstday">{initialstate.startDate}</p>
        </CheckIn>
        <CheckOut>
          체크아웃
          <p className="lastday">{initialstate.endDate}</p>
        </CheckOut>
        <Personnel onClick={() => setDrop(!drop)}>
          인원<p className="guest">게스트 {initialstate.person}명</p>
        </Personnel>
      </CheckBox>
      {drop && <Dropdown maxPeople={result.maxPeople} />}
      <Booking onClick={goToPurchase}>
        <p>예약하기</p>
      </Booking>
      <Price>
        <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
        <DetailPrice>
          <span>
            ₩
            {result.onedayPrice &&
              `${Number(result.onedayPrice).toLocaleString()}`}
            x{countDay}박
          </span>
          <span>
            ₩
            {result.onedayPrice &&
              `${Number(result.onedayPrice * countDay).toLocaleString()}`}
          </span>
        </DetailPrice>
        <DetailPrice>
          <span>서비스 수수료</span>
          <span>
            ₩
            {result.cleaningFee &&
              `${Number(result.cleaningFee).toLocaleString()}`}
          </span>
        </DetailPrice>
      </Price>
      <TotalPrice>
        <span className="total">총 합계</span>
        <span className="total">₩{totalPrices}</span>
      </TotalPrice>
    </Card>
  );
};

export default BookingCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 440px;
  margin-top: 48px;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px 0px rgba(61, 61, 61, 0.65);
  p {
    font-size: 22px;
  }
`;

const Header = styled.div`
  display: flex;
`;

const CheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 325px;
  height: 115px;
`;

const CheckIn = styled.div`
  width: 162.5px;
  height: 60px;
  padding: 15px 0 0 15px;
  border: 1px solid #dddddd;
  font-size: 11px;
  border-top-left-radius: 15px;

  .firstday {
    padding-top: 5px;
    font-size: 14px;
  }
`;

const CheckOut = styled.div`
  width: 162.5px;
  height: 60px;
  padding: 15px 0 0 15px;
  border: 1px solid #dddddd;
  font-size: 11px;
  border-top-right-radius: 15px;

  .lastday {
    padding-top: 5px;
    font-size: 14px;
  }
`;

const Personnel = styled.div`
  position: relative;
  width: 325px;
  height: 60px;
  padding: 15px 0 0 15px;
  border: 1px solid #dddddd;
  font-size: 11px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  .guest {
    font-size: 14px;
    padding-top: 5px;
  }
`;

const Oneday = styled.span`
  font-size: 22px;
  font-weight: 600;
  padding-right: 5px;
`;

const Day = styled.span`
  margin-top: 3px;
  font-size: 16px;
  color: #222222;
`;

const Booking = styled.button`
  width: 325px;
  height: 47px;
  margin-top: 20px;
  background-color: #fe395c;
  border-radius: 10px;

  p {
    font-size: 16px;
    color: #fff;
  }
`;

const DetailPrice = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    text-decoration: solid;
  }
  span {
    font-size: 16px;
    padding-bottom: 20px;
    color: #484848;
  }
`;
const Price = styled.div`
  height: 125px;

  p {
    font-size: 14px;
    text-align: center;
    padding: 20px 0;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 325px;
  height: 45px;
  border-top: 1px solid #dddddd;

  .total {
    font-size: 18px;
    font-weight: 800;
    padding-top: 23px;
  }
`;
