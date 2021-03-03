import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSearch } from 'react-icons/bi';
// import ReactDatePicker from 'react-datepicker';
import 'react-dates/initialize';
import {
  DateRangePicker,
  // SingleDatePicker,
  // DayPickerRangeController,
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const Main = () => {
  // const [startdate, setStartdate] = useState(null);
  // const [enddate, setEnddate] = useState(null);
  const [date, setDate] = useState({
    startdate: null,
    enddate: null,
  });

  const [focusedInput, setfocusedInput] = useState(null);
  const [person, setPerson] = useState(0);

  const searchRoom = date => {
    const moment = require('moment');
    const a = moment(date.startdate).format('YYYY-MM-DD');
    const b = moment(date.enddate).format('YYYY-MM-DD');
    console.log(a);
    console.log(b);
    console.log(person);
  };

  const minNum = person => {
    if (person > 0) {
      setPerson(person - 1);
    }
  };

  return (
    <>
      <Img>
        <img
          alt="backgraound"
          src="https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
      </Img>
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
        />
        <h2>
          인원
          <div>
            <NumberBtn onClick={() => minNum(person)}>-</NumberBtn>
            {person}
            <NumberBtn onClick={() => setPerson(person + 1)}>+</NumberBtn>
          </div>
        </h2>

        <div>
          <button onClick={() => searchRoom(date)}>
            <BiSearch size={15} /> 검색
          </button>
        </div>
      </ReserveBox>
    </>
  );
};

export default Main;

const Img = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 890px;
  }
`;

const ReserveBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  top: 55px;
  left: 25%;
  width: 850px;
  height: 70px;
  margin: 0 auto;
  background-color: white;
  border-radius: 30px;
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
// const SearchBox = styled.div``;
