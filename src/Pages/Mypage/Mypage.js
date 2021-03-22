import React, { useEffect, useState } from 'react';
import Upcomming from './Componet/Upcomming';
import Past from './Componet/Past';
import Cancel from './Componet/Cancel';
import axios from 'axios';
import styled from 'styled-components';
import { baseURL } from '../../config';

const Mypage = props => {
  const [current, setCurrent] = useState(1);
  const [past, setPast] = useState();
  const [upcomming, setUpcomming] = useState([]);
  const [cancel, setCancel] = useState([]);
  const clickHandler = current => setCurrent(current);
  // function clickHandler(current) {
  //   return setCurrent(current);
  // }
  console.log('current', current);
  console.log('idx', MANU.indexOf);

  useEffect(() => {
    const fetchMyData = async () => {
      const result = await axios(`${baseURL}/reservation`, {
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      });

      const {
        upcomingReservations,
        canceledReservations,
        pastReservations,
      } = result.data.results;

      setUpcomming(upcomingReservations);
      setCancel(canceledReservations);
      setPast(pastReservations);
      console.log('허혜성확인', result);
    };
    fetchMyData();
  }, []);

  return (
    <>
      <MypageContainer>
        <MypageTitle>여행</MypageTitle>
        <ManuTab>
          {MANU.map((manu, idx) => (
            <div
              className={current === idx + 1 ? 'tabOn' : 'tabOff'}
              onClick={() => clickHandler(idx + 1)}
            >
              {manu}
            </div>
          ))}
        </ManuTab>
        <Centant>
          {current === 1 && <Upcomming outcome={upcomming} />}
          {current === 2 && <Past outcomepast={past} />}
          {current === 3 && <Cancel outcomecan={cancel} />}
        </Centant>
      </MypageContainer>
    </>
  );
};

export default Mypage;
const MANU = ['예정된 예약', '지난 예약', '취소된 예약'];
const MypageContainer = styled.div`
  width: 1270px;
  margin: auto;
`;
const ManuTab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #dddddd;

  div {
    margin: 30px 30px 0 0;
  }

  .tabOff {
    color: #646464;
    border: none;
    cursor: pointer;
  }

  .tabOn {
    color: #000;
    border-bottom: 2px solid #000;
    cursor: pointer;
  }
`;

const MypageTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  margin-top: 35px;
`;

const Centant = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  padding-top: 30px;
`;
