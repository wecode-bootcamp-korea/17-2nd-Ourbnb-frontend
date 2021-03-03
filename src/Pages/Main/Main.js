import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearch } from 'react-icons/bi';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const Main = () => {
  const [date, setDate] = useState({
    startdate: null,
    enddate: null,
  });
  const [focusedInput, setfocusedInput] = useState(null);
  const [person, setPerson] = useState(0);
  const moment = require('moment');
  const startday = moment(date.startdate).format('YYYY_MM_DD');
  const endday = moment(date.enddate).format('YYYY_MM_DD');

  const subtractPerson = () => {
    if (person > 0) {
      setPerson(person - 1);
    }
  };

  const addPerson = () => {
    setPerson(person + 1);
  };

  return (
    <>
      <MainImg>
        <img
          alt="backgraound"
          src="https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
        <h1>호스트 분들이 있기에 가능합니다.</h1>
      </MainImg>
      <ReserveBox>
        <h3>
          위치 <input placeholder="선릉" disabled />
        </h3>
        <DateRangePicker
          startDate={date.startdate}
          startDateId="your_unique_start_date_id"
          endDate={date.enddate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            setDate({ startdate: startDate, enddate: endDate })
          }
          focusedInput={focusedInput}
          onFocusChange={focusedInput => setfocusedInput(focusedInput)}
          SelectedDateFormat="Long"
          DisplayDateStart="03/03/21"
          DisplayDateEnd="03/30/21"
        />
        <h2>
          인원
          <div>
            <NumberBtn onClick={subtractPerson}>-</NumberBtn>
            {person}
            <NumberBtn onClick={addPerson}>+</NumberBtn>
          </div>
        </h2>

        <div>
          <Link
            to={{
              pathname: '/detaillist',
              state: {
                startDate: startday,
                endDate: endday,
                person: person,
              },
            }}
          >
            <button>
              <BiSearch size={15} /> 검색
            </button>
          </Link>
        </div>
      </ReserveBox>
    </>
  );
};

export default withRouter(Main);

const MainImg = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background-color: black;
  align-items: center;

  img {
    width: 90%;
    height: 85%;
    margin: 50px 0 20px 70px;
  }
  h1 {
    text-align: center;
    font-size: 35px;
    color: white;
  }
`;

const ReserveBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  top: 45px;
  left: 25%;
  width: 850px;
  height: 70px;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgb(217, 217, 217);
  h3 {
    display: flex;
    flex-direction: column;
    input {
      border: none;
    }
  }
  h2 {
    display: flex;
    flex-direction: column;
    text-align: center;
    div {
      cursor: pointer;
    }
    input {
      width: 160px;
      height: 18px;
      margin-top: 5px;
      border: white;
    }
  }
  button {
    width: 80px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
    color: white;
    background: rgb(251, 28, 74);
    border-radius: 30px;
  }
`;
const NumberBtn = styled.span`
  margin: 0 10px 0 10px;
`;
