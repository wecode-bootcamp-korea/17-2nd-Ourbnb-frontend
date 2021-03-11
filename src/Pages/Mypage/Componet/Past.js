import React from 'react';
import styled from 'styled-components';
import PastList from './PastList';

const Past = ({ outcomepast }) => {
  return (
    <PastBox>
      {outcomepast &&
        outcomepast.map(effect => (
          <PastList
            accommodationAddress={effect.accommodationAddress}
            accommodationName={effect.accommodationName}
            endDate={effect.endDate}
            startDate={effect.startDate}
            thumbnailImage={effect.thumbnailImage}
          />
        ))}
    </PastBox>
  );
};

export default Past;

const PastBox = styled.div`
  display: flex;
  flex-direction: row;
`;
//
