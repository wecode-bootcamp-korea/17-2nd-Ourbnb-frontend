import React, { useState } from 'react';
import styled from 'styled-components';

const Dropdown = props => {
  const { maxPeople } = props;
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <DropBox>
      <Adult>인원</Adult>
      <Countbox>
        <button onClick={handleDecrement}>
          <img src="/images/minus.png" alt="minus" />
        </button>
        <NumPerson>{count}</NumPerson>
        <button onClick={handleIncrement}>
          <img src="/images/plus.png" alt="plus" />
        </button>
      </Countbox>
      <Notice>
        최대 {maxPeople && maxPeople}명. 유아는 숙박인원에 포함되지 않습니다.
      </Notice>
    </DropBox>
  );
};

export default Dropdown;

const DropBox = styled.div`
  position: absolute;
  top: 825px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 325px;
  height: 115px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #dddddd;
  //z-index: 1000;
`;

const Adult = styled.div`
  height: 50px;
  width: 60%;
  padding-top: 20px;
  font-size: 16px;
  //color: red;
  //background-color: skyblue;
`;

const Countbox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  height: 50px;
  width: 40%;
  //background-color: yellowgreen;

  button {
    background-color: #fff;
    outline: none;

    img {
      width: 32px;
      height: 32px;
      margin-top: 5px;
    }
  }
`;

const NumPerson = styled.span`
  padding-top: 20px;
`;

const Notice = styled.h4`
  font-size: 15px;
  color: gray;
`;
