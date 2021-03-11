import styled from 'styled-components';

const TypelBox = props => {
  const {
    ishotel,
    isentire,
    isprivate,
    isshared,
    setHotel,
    setEnt,
    setSha,
    setPri,
    searchType,
  } = props;

  return (
    <div>
      <Cotainer>
        <List>
          <Typelist>
            <input
              type="checkbox"
              name="entireplace"
              checked={isentire}
              onChange={() => setEnt(!isentire)}
              value="entire"
            />
            <div>
              <h1>집전체</h1>
              <h2>집전체를 단독으로 사용합니다</h2>
            </div>
          </Typelist>
          <Typelist>
            <input
              type="checkbox"
              name="entireplace"
              checked={isprivate}
              onChange={() => setPri(!isprivate)}
              value="shared"
            />
            <div>
              <h1>개인실</h1>
              <h2>집전체를 단독으로 사용합니다</h2>
            </div>
          </Typelist>
          <Typelist>
            <input
              type="checkbox"
              name="entireplace"
              checked={isshared}
              onChange={() => setSha(!isshared)}
              value="shared"
            />
            <div>
              <h1>다인실</h1>
              <h2>집전체를 단독으로 사용합니다</h2>
            </div>
          </Typelist>
          <Typelist>
            <input
              type="checkbox"
              name="entireplace"
              checked={ishotel}
              onChange={() => setHotel(!ishotel)}
              value="shared"
            />
            <div>
              <h1>호텔</h1>
              <h2>집전체를 단독으로 사용합니다</h2>
            </div>
          </Typelist>
        </List>
        <SaveBtn>
          <button onClick={searchType}>save</button>
        </SaveBtn>
      </Cotainer>
    </div>
  );
};

export default TypelBox;

const Cotainer = styled.div`
  position: absolute;
  top: 245px;
  left: 10px;
  width: 300px;
  height: 450px;
  border-radius: 20px;
  border: 1px solid rgb(217, 217, 217);
  background: white;
  z-index: 10;
`;
const List = styled.div``;

const Typelist = styled.div`
  display: flex;
  align-content: center;
  padding: 18px;
  border-top: 1px solid rgb(217, 217, 217);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 200;
  height: 100px;
  div {
    width: 186px;
    height: 80px;
    font-size: 15px;
    margin-left: 10px;
    h1 {
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: 400;
    }
  }
  input {
    height: 20px;
    width: 20px;
    border-radius: 10%;
    border: 1px solid rgb(217, 217, 217);
    &:hover {
      border: 1px solid black;
    }
  }
`;
const SaveBtn = styled.div`
  right: 0;
  padding: 10px;
  border-top: 1px solid rgb(217, 217, 217);
  button {
    position: absolute;
    right: 14px;
    width: 70px;
    height: 30px;
    padding: 3px;
    font-size: 17px;
    color: white;
    background: rgb(251, 28, 74);
    border-radius: 20px;
    &:hover {
      background: rgb(218, 0, 71);
    }
  }
`;
