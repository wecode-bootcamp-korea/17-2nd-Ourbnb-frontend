import React, { useState, useEffect } from 'react';
import List from './List';
import Map from '../Map/Map';
import axios from 'axios';
import styled from 'styled-components';
import { URL } from '../../config';

const DetailList = props => {
  const [isentire, setEnt] = useState(false);
  const [isshared, setSha] = useState(false);
  const [isprivate, setPri] = useState(false);
  const [ishotel, setHotel] = useState(false);
  const [roomdata, setroomData] = useState([]);
  const [mapdata, setmapData] = useState([]);
  const [minvalue, setMinvalue] = useState('');
  const [maxvalue, setMaxvalue] = useState('');
  const [istypeopen, settypeOpen] = useState(false);
  const [ispriceopen, setpriceopen] = useState(false);
  const { state } = props.location;

  const baseUrl = `checkin=${state.startDate}&checkout=${state.endDate}&guests=${state.person}&`;
  const initialtypeurl = 'entire=&private=&hotel=&shared=&min=&max=';

  const searchType = () => {
    let hot = ishotel.toString();
    let ent = isentire.toString();
    let pri = isprivate.toString();
    let sha = isshared.toString();

    const fetchdata = async () => {
      const result = await axios(
        `${URL}/accommodation?${baseUrl}entire=${hot}&private=${pri}&hotel=${ent}&shared=${sha}&min=${minvalue}&max=${maxvalue}`
      );

      const mapdata = result.data.data.map(data => {
        return { lat: data.lat, long: data.long };
      });

      setroomData(result.data.data);
      setmapData(mapdata);
    };
    fetchdata();
    settypeOpen(false);
    setpriceopen(false);
  };

  //서버 통신용
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     if (state.startDate === `Invalid date`) {
  //       state.startDate = '';
  //     }
  //     if (state.endDate === `Invalid date`) {
  //       state.endDate = '';
  //     }

  //     try {
  //       const result = await axios(
  //         `${URL}/accommodation?checkin=${state.startDate}&checkout=${state.endDate}&guests=${state.person}`
  //       );
  //       console.log(result);
  //       let mapdata = result.data.data.map(data => {
  //         return { lat: data.lat, long: data.long };
  //       });
  //       setroomData(result.data.data);
  //       setmapData(mapdata);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchdata();
  // }, [state, state.endDate, state.person, state.startDate]);

  //목데이터
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
      <List
        roomdata={roomdata}
        checkdata={state}
        ishotel={ishotel}
        isentire={isentire}
        isprivate={isprivate}
        isshared={isshared}
        setHotel={setHotel}
        setEnt={setEnt}
        setSha={setSha}
        setPri={setPri}
        searchType={searchType}
        minvalue={minvalue}
        setMinvalue={setMinvalue}
        maxvalue={maxvalue}
        setMaxvalue={setMaxvalue}
        onChange={onchange}
        istypeopen={istypeopen}
        ispriceopen={ispriceopen}
        settypeOpen={settypeOpen}
        setpriceopen={setpriceopen}
        frontdata={state}
      />
      {mapdata && <Map mapdata={mapdata} />}
    </Listcontainer>
  );
};

export default DetailList;

const Listcontainer = styled.div`
  display: flex;
`;
