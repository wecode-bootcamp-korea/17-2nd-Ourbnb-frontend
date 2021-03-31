import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TypePriceFilterd } from '../../store/actions/index';
import { baseURL } from '../../config';

const TypelBox = ({ defaultUrl, settypeOpen, setType }) => {
  const [types, setTypes] = useState({
    isentire: false,
    isshared: false,
    isprivate: false,
    ishotel: false,
  });

  const { isentire, isshared, isprivate, ishotel } = types;
  const dispatch = useDispatch();

  let myUrl = new URL(`${baseURL}/accommodation?`);
  let params = new URLSearchParams(myUrl.search.slice(1));
  const typearr = [
    { is: ishotel, key: 'hotel' },
    { is: isentire, key: 'entire' },
    { is: isshared, key: 'shared' },
    { is: isprivate, key: 'private' },
  ];

  typearr.forEach(type => {
    if (type.is) {
      params.append('roomtype', type.key);
    } else {
      params.delete(('roomtype', type.key));
    }
  });
  let typeurl = params.toString();
  let typeurland = `&${typeurl}`;

  const onchange = e => {
    const { checked, name } = e.target;
    setTypes({
      ...types,
      [name]: checked,
    });
  };

  const searchType = () => {
    settypeOpen(false);
    setType(typeurland);
    dispatch(TypePriceFilterd(typeurland, defaultUrl));
  };

  return (
    <div>
      <Cotainer>
        <List>
          {typelist.map((list, inx) => {
            return (
              <Typelist key={inx}>
                <input type="checkbox" name={list.name} onChange={onchange} />
                <div>
                  <h1>{list.type}</h1>
                  <h2>{list.desc}</h2>
                </div>
              </Typelist>
            );
          })}
        </List>
        <SaveBtn>
          <button onClick={() => searchType()}>save</button>
        </SaveBtn>
      </Cotainer>
    </div>
  );
};

export default TypelBox;

const typelist = [
  {
    name: 'isentire',
    type: '집전체',
    desc: '집 전체를 단독으로 사용합니다.',
  },
  {
    name: 'isprivate',
    type: '개인실',
    desc:
      '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.',
  },
  {
    name: 'isshared',
    type: '다인실',
    desc: '부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.',
  },
  {
    name: 'ishotel',
    type: '호텔',
    desc:
      '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다.',
  },
];

const Cotainer = styled.div`
  position: absolute;
  top: 245px;
  left: 10px;
  width: 300px;
  height: 450px;
  border-radius: 20px;
  border: 1px solid rgb(217, 217, 217);
  background: white;
  z-index: 10;
`;
const List = styled.div``;

const Typelist = styled.div`
  display: flex;
  align-content: center;
  padding: 18px;
  border-top: 1px solid rgb(217, 217, 217);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 200;
  height: 100px;
  div {
    width: 186px;
    height: 80px;
    font-size: 15px;
    margin-left: 10px;
    h1 {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: 400;
    }
  }
  input {
    height: 20px;
    width: 20px;
    border-radius: 10%;
    border: 1px solid rgb(217, 217, 217);
    &:hover {
      border: 1px solid black;
    }
  }
`;
const SaveBtn = styled.div`
  right: 0;
  padding: 10px;
  border-top: 1px solid rgb(217, 217, 217);
  button {
    position: absolute;
    right: 14px;
    width: 70px;
    height: 30px;
    padding: 3px;
    font-size: 17px;
    color: white;
    background: rgb(251, 28, 74);
    border-radius: 20px;
    &:hover {
      background: rgb(218, 0, 71);
    }
  }
`;
