import React from 'react';
import styled from 'styled-components';
import UpcommingList from './UpcommingList';

const Upcomming = ({ outcome }) => {
  console.log('잠깐', outcome);
  return (
    <UpcomBox>
      {outcome &&
        outcome.map(effect => (
          <UpcommingList
            accommodationAddress={effect.accommodationAddress}
            accommodationName={effect.accommodationName}
            endDate={effect.endDate}
            startDate={effect.startDate}
            thumbnailImage={effect.thumbnailImage}
          />
        ))}
    </UpcomBox>
  );
};

export default Upcomming;

const UpcomBox = styled.div`
  display: flex;
  flex-direction: row;
`;
