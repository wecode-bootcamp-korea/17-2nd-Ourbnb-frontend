import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TypePriceFilterd } from '../../store/actions/index';
import { baseURL } from '../../config';

const Pricebox = ({ defaultUrl, setpriceopen, setType }) => {
  const [price, setPrice] = useState({ min: '', max: '' });
  const { min, max } = price;

  const onchange = e => {
    const { name, value } = e.target;
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  let myUrl = new URL(`${baseURL}/accommodation?`);
  let params = new URLSearchParams(myUrl.search.slice(1));

  if (min) {
    params.append('min', min);
  } else {
    params.delete('min', min);
  }
  if (max) {
    params.append('max', max);
  } else {
    params.delete('max', max);
  }

  const typeurl = params.toString();
  const typeurland = `&${typeurl}`;
  // type이랑 프라이스 두개를 따로 뺀다면어어너어언?
  const searchPrice = () => {
    setpriceopen(false);
    setType(typeurland);
    dispatch(TypePriceFilterd(typeurland, defaultUrl));
  };

  return (
    <PriceContainer>
      <Form>
        <div>
          <h3>최저가격</h3>
          <input name="min" onChange={onchange} />
        </div>
      </Form>

      <Form>
        <div>
          <h3>최고가격</h3>
          <input name="max" onChange={onchange} />
        </div>
      </Form>
      <Button onClick={() => searchPrice()}>save</Button>
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
