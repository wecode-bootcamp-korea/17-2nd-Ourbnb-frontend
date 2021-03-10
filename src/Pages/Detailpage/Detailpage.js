import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BookingCard from './Component/BookingCard';
import Picture from './Component/Picture';
import { useLocation, useParams } from 'react-router-dom';
import RoomDetail from './Component/RoomDetail';
import Title from './Component/Title';
import axios from 'axios';
import Review from './Component/Review';

const Detailpage = props => {
  const [list, setList] = useState([]);
  const { state } = props.location;
  const location = useLocation();

  const initialstate = location.state.initialstate;

  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/data/detail.json');
      setList(result.data);
    };
    fetchData();
  }, [props.match.params.id]);

  //Mock
  //'/data/detail.json'
  //Data
  //`http://10.58.1.88:8000/accommodation/${props.match.params.id}`
  console.log('나야');

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
