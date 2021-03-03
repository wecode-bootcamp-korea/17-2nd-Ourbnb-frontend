import React, { useEffect } from 'react';
import styled from 'styled-components';

const TypelBox = () => {
  const searchType = () => {};

  return (
    <div>
      <Cotainer>
        <List>
          {typeList.map(type => {
            return (
              <Typelist>
                <input
                  type="checkbox"
                  name="entireplace"
                  //   checked={this.state.checked}
                />
                <div>
                  <h1>{type.name}</h1>
                  <h2>{type.desc}</h2>
                </div>
              </Typelist>
            );
          })}
        </List>
        <SaveBtn>
          <button onClick={searchType}>save</button>
        </SaveBtn>
      </Cotainer>
    </div>
  );
};

export default TypelBox;

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
    height: 28px;
    width: 28px;
    border-radius: 10%;
    border: 1px solid rgb(217, 217, 217);
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
  }
`;

const typeList = [
  {
    name: '집전체',
    desc: '집전체를 단독으로 사용합니다',
    type: 'entire',
    id: 1,
  },
  {
    name: '개인실',
    desc:
      '침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.',
    type: 'private',
    id: 2,
  },
  {
    name: '호텔 객실',
    desc: '부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다.',
    type: 'hotel',
    id: 3,
  },
  {
    name: '다인실',
    desc:
      '사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다.',
    type: 'shared',
    id: 4,
  },
];
