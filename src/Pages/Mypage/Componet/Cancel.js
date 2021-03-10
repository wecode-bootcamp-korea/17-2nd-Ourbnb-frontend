import React from 'react';
import styled from 'styled-components';
import CancelList from './CancelList';

const Cancel = ({ outcomecan }) => {
  return (
    <CancelBox>
      {outcomecan &&
        outcomecan.map(effect => (
          <CancelList
            accommodationAddress={effect.accommodationAddress}
            accommodationName={effect.accommodationName}
            endDate={effect.endDate}
            startDate={effect.startDate}
            thumbnailImage={effect.thumbnailImage}
          />
        ))}
    </CancelBox>
  );
};

export default Cancel;

const CancelBox = styled.div`
  display: flex;
  flex-direction: row;
`;
