import React from 'react';
import styled from 'styled-components';

const ListHead = () => {
  return (
    <div>
      <Titile>지도에서 선택한 지역의 숙소</Titile>
      <Tag>
        <span>숙소유형</span>
        <span>숙소유형</span>
      </Tag>
    </div>
  );
};

export default ListHead;

const Titile = styled.h1`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 800;
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 40px;

  span {
    border: 1px solid gray;
    border-radius: 30px;
  }
`;
