import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookingCard from './Component/BookingCard';
import Picture from './Component/Picture';
import { useLocation } from 'react-router-dom';
import RoomDetail from './Component/RoomDetail';
import Title from './Component/Title';
import axios from 'axios';
import Review from './Component/Review';
import { baseURL } from '../../config';

const Detailpage = props => {
  const [list, setList] = useState([]);
  const location = useLocation();
  const initialstate = location.state.initialstate;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${baseURL}/accommodation/${props.match.params.id}`
      );
      setList(result.data);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <Container>
      {list && <Title result={list} />}
      {list && <Picture result={list} />}
      <A>
        {list && <RoomDetail result={list} />}
        {list && <BookingCard result={list} initialstate={initialstate} />}
      </A>
      {list && <Review result={list} />}
      {/* <Location data={list} /> */}
    </Container>
  );
};

export default Detailpage;

const Container = styled.div`
  width: 1265px;
  margin: auto;
`;

const A = styled.div`
  display: flex;
`;
