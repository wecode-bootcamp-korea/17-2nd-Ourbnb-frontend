import React, { useState, useEffect } from 'react';
import List from './List';
import Map from '../Map/Map';
import axios from 'axios';
import styled from 'styled-components';
import { URL } from '../../config';

const DetailList = props => {
  const [roomdata, setroomData] = useState([]);
  const [mapdata, setmapData] = useState([]);
  const { state } = props.location;
  //console.log('이거슨 디테일리스트>>', props.location.state);
  //백엔드 통신용 로직
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const result = await axios(
  //       `${URL}/rooms?startday=${state.startDate}&endday=${state.endDate}&person=${state.person}`
  //     );

  //     let mapdata = result.data.data.map(data => {
  //       return { lat: data.lat, long: data.long };
  //     });

  //     setroomData(result.data.data);
  //     setmapData(mapdata);
  //   };
  //   fetchdata();
  // }, [state.endDate, state.person, state.startDate]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios('/data/roomListdata.json');

      const mapdata = result.data.data.map(data => {
        return { lat: data.lat, long: data.long };
      });

      setroomData(result.data.data);
      setmapData(mapdata);
    };
    fetchdata();
  }, []);

  //console.log('디테일리스트>>>>', props);
  return (
    <Listcontainer>
      <List roomdata={roomdata} checkdata={state} />
      <Map mapdata={mapdata} />
    </Listcontainer>
  );
};

export default DetailList;

const Listcontainer = styled.div`
  display: flex;
`;
