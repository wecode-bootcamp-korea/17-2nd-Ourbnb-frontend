import React, { useState, useEffect } from 'react';
import List from './List';
import Map from '../Map/Map';
import axios from 'axios';
import styled from 'styled-components';
import { baseURL } from '../../config';
import { useHistory } from 'react-router-dom';

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
  const [pageindex, setPageindex] = useState('');
  const { state } = props.location;

  const LIMIT = 15;

  const defaultUrl = `checkin=${state.startDate}&checkout=${state.endDate}&guests=${state.person}`;

  useEffect(() => {
    if (state.startDate === 'Invalid date') {
      state.startDate = '';
    }
    if (state.endDate === 'Invalid date') {
      state.endDate = '';
    }

    const fetchdata = async () => {
      try {
        const result = await axios(
          `${baseURL}/accommodation?checkin=${state.startDate}&checkout=${state.endDate}&guests=${state.person}`
        );

        let mapdata = result.data.data.map(data => {
          return { lat: data.lat, long: data.long };
        });
        setroomData(result.data.data);
        setmapData(mapdata);

        setPageindex(result.data.index);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, []);

  let myUrl = new URL(`${baseURL}/accommodation?`);
  let params = new URLSearchParams(myUrl.search.slice(1));
  const typearr = [
    { is: ishotel, key: 'hotel' },
    { is: isentire, key: 'entire' },
    { is: isshared, key: 'shared' },
    { is: isprivate, key: 'private' },
  ];

  typearr.map(type => {
    if (type.is) {
      params.append('roomtype', type.key);
    } else {
      params.delete(('roomtype', type.key));
    }
  });

  if (minvalue) {
    params.append('min', minvalue);
  } else {
    params.delete('min', minvalue);
  }
  if (maxvalue) {
    params.append('max', maxvalue);
  } else {
    params.delete('max', maxvalue);
  }

  const typeurl = params.toString();
  const typeurland = `&${typeurl}`;

  const searchType = () => {
    const fetchdata = async () => {
      const result = await axios(
        `${baseURL}/accommodation?${defaultUrl}${typeurland}`
      );
      const mapdata = result.data.data.map(data => {
        return { lat: data.lat, long: data.long };
      });
      setroomData(result.data.data);
      setmapData(mapdata);
      setPageindex(result.data.index);
    };
    fetchdata();
    settypeOpen(false);
    setpriceopen(false);
  };

  const fetchPage = async e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const offset = e?.target.dataset.idx;

    const result = await axios(
      `${baseURL}/accommodation?${defaultUrl}${typeurland}&limit=${LIMIT}&offset=${
        offset * LIMIT
      }`
    );

    setroomData(result.data.data);
    setmapData(mapdata);
  };

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
        fetchPage={fetchPage}
        pageindex={pageindex}
      />

      {mapdata && <Map mapdata={mapdata} />}
    </Listcontainer>
  );
};

export default DetailList;

const Listcontainer = styled.div`
  display: flex;
  position: relative;

  margin-bottom: 50px;
`;
