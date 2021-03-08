import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiAirbnb } from 'react-icons/si';
import { VscGlobe } from 'react-icons/vsc';
import { BsList } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

const Nav = () => {
  return (
    <Box>
      <Link to="/">
        <p>
          <SiAirbnb size={30} />
          <h3>OurBnB</h3>
        </p>
      </Link>
      <Navicon>
        <h1>호스트 되기</h1>
        <div>
          <VscGlobe size={27} />
        </div>
        <span>
          <BsList size={26} />
          <div>
            <FaRegUserCircle size={28} />
          </div>
        </span>
      </Navicon>
    </Box>
  );
};

export default Nav;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid gray;
  p {
    display: flex;
    margin-top: 6px;
    padding: 4px;
    color: rgb(251, 28, 74);
    font-size: 24px;
    font-weight: 800;
    h3 {
      margin: 8px 0 0 5px;
    }
  }
  input {
    border: 1px solid gray;
    width: 300px;
    height: 48px;
    padding: 10px;
    border-radius: 50px;
    color: black;
    font-weight: 800;
    color: black;
    background-position: 270px -10px;
    background-repeat: no-repeat;
  }
  a {
    text-decoration: none;
  }
`;

const Navicon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 250px;
  h1 {
    margin-top: 15px;
    font-weight: 400;
  }
  div {
    margin-top: 8px;
  }
  span {
    display: inline-block;
    width: auto;
    height: 50px;
    padding: 7px;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 30px;
    color: rgb(94, 94, 94);
    div {
      display: inline;
      margin-left: 8px;
      margin-top: 7px;
    }
  }
`;
