import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListCard from './ListCard';
import TypeBox from './TypelBox';
import PriceBox from './PriceBox';

const List = props => {
  const {
    ishotel,
    isentire,
    isprivate,
    isshared,
    setHotel,
    setEnt,
    setSha,
    setPri,
    searchType,
    minvalue,
    setMinvalue,
    setMaxvalue,
    maxvalue,
    searchPrice,
    onchange,
    istypeopen,
    settypeOpen,
    ispriceopen,
    setpriceopen,
  } = props;

  const startdayarr = props.checkdata.startDate.split('-');
  const enddayarr = props.checkdata.endDate.split('-');
  const { person } = props.checkdata;

  return (
    <Listcontainer>
      {istypeopen && <ModalOutside onClick={() => settypeOpen(false)} />}
      {ispriceopen && <ModalOutside onClick={() => setpriceopen(false)} />}

      <CheckInfo>
        {startdayarr[1]}월 {startdayarr[2]}일 - {enddayarr[1]}월 {enddayarr[2]}
        일, 게스트 {person} 명
      </CheckInfo>
      <Title>지도에서 선택한 지역의 숙소</Title>
      <Tag>
        <span onClick={() => settypeOpen(!istypeopen)}>숙소유형</span>
        <span onClick={() => setpriceopen(!ispriceopen)}>가격</span>
        {istypeopen && (
          <TypeBox
            ishotel={ishotel}
            isentire={isentire}
            isprivate={isprivate}
            isshared={isshared}
            setHotel={setHotel}
            setEnt={setEnt}
            setSha={setSha}
            setPri={setPri}
            searchType={searchType}
            onChange={onchange}
          />
        )}
        {ispriceopen && (
          <PriceBox
            minvalue={minvalue}
            setMinvalue={setMinvalue}
            maxvalue={maxvalue}
            setMaxvalue={setMaxvalue}
            searchPrice={searchPrice}
            searchType={searchType}
          />
        )}
      </Tag>
      <div>
        {props.roomdata.map(room => {
          return (
            <ListCard data={room} key={room.id} initialdata={props.frontdata} />
          );
        })}
      </div>

      <PageNum>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </PageNum>
    </Listcontainer>
  );
};

export default List;

const Listcontainer = styled.div`
  width: 50%;
  height: 1000px;
  overflow: scroll;
`;

const Title = styled.h1`
  margin: 20px 0 0 25px;
  font-size: 30px;
  font-weight: 800;
`;

const Tag = styled.div`
  display: flex;
  margin: 40px 0 35px 20px;
  font-weight: 500;
  cursor: pointer;

  span {
    display: block;
    margin-right: 10px;
    padding: 8px;
    border: 1px solid rgb(160 160 160);
    border-radius: 30px;
    color: black;
  }
`;

const PageNum = styled.div`
  margin-top: 10px;
  text-align: center;

  span {
    display: inline-block;
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 30px;
  }
`;
const ModalOutside = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 8;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const CheckInfo = styled.div`
  padding: 20px 0 0 27px;
  color: gray;
  font-size: 20px;
`;
