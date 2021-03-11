import React from 'react';
import styled from 'styled-components';

const Pricebox = props => {
  const { minvalue, maxvalue, setMinvalue, setMaxvalue, searchType } = props;

  return (
    <PriceContainer>
      <Form>
        <div>
          <h3>최저가격</h3>
          <input
            value={minvalue}
            onChange={event => setMinvalue(event.target.value)}
          />
        </div>
      </Form>

      <Form>
        <div>
          <h3>최고가격</h3>
          <input
            value={maxvalue}
            onChange={event => setMaxvalue(event.target.value)}
          />
        </div>
      </Form>
      <Button onClick={searchType}>save</Button>
    </PriceContainer>
  );
};

export default Pricebox;

const PriceContainer = styled.div`
  display: flex;
  position: absolute;
  left: 110px;
  top: 250px;
  background-color: white;
  width: 340px;
  height: 100px;
  z-index: 100;
  border-radius: 20px;
  border: 1px solid rgb(230, 230, 230);
`;

const Form = styled.div`
  width: 130px;
  margin: auto 0;
  text-align: center;
  h1 {
    margin-bottom: 15px;
  }
  input {
    width: 120px;
    margin-top: 8px;
    border: 1px solid rgb(230, 230, 230);
  }
`;
const Button = styled.button`
  width: 55px;
  height: 25px;
  margin: 48px auto;
  border-radius: 30px;
  background-color: rgb(251, 28, 74);
  color: white;
  &:hover {
    background: rgb(218, 0, 71);
  }
`;
