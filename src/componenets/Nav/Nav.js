import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { SiAirbnb } from 'react-icons/si';
import { BsList } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiLoginBoxLine } from 'react-icons/ri';
import Join from '../../Pages/Join/Join';

const Nav = () => {
  // class 컴포넌트에서 STATE 정의
  const [isJoin, setIsJoin] = useState(false);
  const history = useHistory();

  const goToMypage = () => {
    history.push('/mypage');
  };

  const menuClick = () => {
    setIsJoin(!isJoin);
  };

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
          <RiLoginBoxLine size={27} onClick={menuClick} />
        </div>
        <span>
          <BsList size={26} />
          <div>
            <FaRegUserCircle size={28} onClick={goToMypage} />
          </div>
          {isJoin && <Join setIsJoin={setIsJoin} />}
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
  box-shadow: 0px 7px 50px -18px rgba(61, 61, 61, 0.65);
  border: 1px solid #dddddd;
  p {
    display: flex;
    margin-top: 6px;
    padding: 4px;
    color: rgb(251, 28, 74);
    font-size: 24px;
    font-weight: 1000;
    h3 {
      margin: 8px 0 0 5px;
      font-weight: 1000;
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
    font-weight: 800;
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
      // margin-left: 8px;
      margin-top: 7px;
    }
  }
`;
