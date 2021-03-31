import React, { useEffect } from 'react';
import List from './List';
import Map from '../Map/Map';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchlist } from '../../store/actions/index';

const DetailList = props => {
  const { state } = props.location;
  const { startDate, endDate, person } = state;
  const Dispatch = useDispatch();
  const result = useSelector(store => store.ListReducer);
  const defaultUrl = `checkin=${state.startDate}&checkout=${state.endDate}&guests=${state.person}`;

  useEffect(() => {
    Dispatch(fetchlist(startDate, endDate, person));
  }, [startDate, endDate, person, Dispatch]);

  return (
    <Listcontainer>
      {result[0] && (
        <>
          <List checkdata={state} frontdata={state} defaultUrl={defaultUrl} />
          <Map mapdata={result} />
        </>
      )}
    </Listcontainer>
  );
};

export default DetailList;

const Listcontainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 50px;
`;
