import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookingCard from './Component/BookingCard';
import Location from './Component/Location';
import Picture from './Component/Picture';
//import Review from './Component/Review';
import { useLocation, useParams } from 'react-router-dom';
import RoomDetail from './Component/RoomDetail';
import Title from './Component/Title';
import axios from 'axios';
import Review from './Component/Review';
//import Dropbox from './Component/Dropbox';

const Detailpage = props => {
  //const location = useLocation();
  const [list, setList] = useState([]);
  const { state } = props.location;
  console.log('이거슨 디테일상세>>', state);
  //console.log(data);
  //console.log('과연match>>>>', props.match.params.id);
  const param = useParams();
  console.log(param.id);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://10.58.5.211:8000/accommodation/${props.match.params.id}`
      );
      setList(result.data && result.data);
      //console.log('지도 찾자>>>>', result.data.lat);
    };
    fetchData();
  }, []);
  //console.log('링크가 넘어왓을까여>>>', props);
  return (
    <Container>
      <Title data={list} />
      <Picture data={list} />
      <A>
        <RoomDetail data={list} />
        <BookingCard data={list} checkday={state} />
      </A>
      <Review data={list} />
      {/* <Location data={list} /> */}
    </Container>
  );
};

export default Detailpage;

const Container = styled.div`
  width: 1265px;
  //height: 100vh;
  //background-color: olive;
  margin: auto;
`;

const A = styled.div`
  display: flex;
`;
