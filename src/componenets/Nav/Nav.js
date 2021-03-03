import React from 'react';
import styled from 'styled-components';
import { SiAirbnb } from 'react-icons/si';
import { VscGlobe } from 'react-icons/vsc';
import { BsList } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

// import { BiSearch } from 'react-icons/bi';

const Nav = () => {
  return (
    <Box>
      <p>
        <SiAirbnb size={30} />
        OurBnB
      </p>
      {/* <div>
        <input placeholder="검색 시작하기" />
        <BiSearch size={20} />
      </div> */}
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
  /* background: black; */

  border-bottom: 1px solid gray;
  p {
    margin-top: 6px;
    padding: 4px;
    color: rgb(251, 28, 74);
    font-size: 24px;
    font-weight: 700;
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
    /* background: url('http://www.kirupa.com/images/search.png') no-repeat 100%
      50%; */
  }
`;

const Navicon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 200px;
  h1 {
    margin-top: 15px;
  }
  div {
    margin-top: 8px;
  }
  span {
    display: inline-block;
    width: auto;
    height: 50px;
    padding: 7px;
    border: 1px solid gray;
    border-radius: 26px;
    div {
      display: inline;
      margin-left: 8px;
      margin-top: 7px;
    }
  }
`;
