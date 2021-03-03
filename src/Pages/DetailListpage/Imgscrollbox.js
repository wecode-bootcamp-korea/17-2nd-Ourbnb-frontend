import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

class Imgscrollbox extends Component {
  state = {
    wrapwidth: '1920',
    curwidth: 0,
    nextArrow: true,
    prevArrow: false,
  };

  moveRight = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth >= -1152 && curwidth - 384,
    });
  };

  moveLeft = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth !== 0 && curwidth + 384,
    });
  };

  render() {
    const { data } = this.props;
    const { curwidth } = this.state;
    return (
      <Imgbox curwidth={curwidth}>
        <div className="displayBox">
          <WrapImg
            className="wrapImg"
            style={{
              transform: `translate3d(${curwidth}px,0,0)`,
              transition: ` 0.5s ease-in `,
            }}
          >
            {data.map((img, idx) => {
              return <img alt="room" src={img} key={idx} />;
            })}
          </WrapImg>
        </div>
        <div className="leftArrow" onClick={this.moveLeft}>
          <IoIosArrowDropleft size={40} />
        </div>
        <div className="rightArrow" onClick={this.moveRight}>
          <IoIosArrowDropright size={40} />
        </div>
      </Imgbox>
    );
  }
}

export default Imgscrollbox;

const Imgbox = styled.div`
  position: relative;
  .displayBox {
    position: relative;
    display: flex;
    width: 384px;
    height: 264px;
    overflow: hidden;
    .wrapImg {
      display: flex;
      height: auto;
      width: auto;

      img {
        width: 384px;
        height: 264px;
      }
    }
  }

  .leftArrow {
    display: none;
    position: absolute;
    top: 40%;
    left: 0;
    color: white;
    cursor: pointer;
  }
  .rightArrow {
    display: none;
    position: absolute;
    top: 40%;
    right: 30px;
    color: white;
    cursor: pointer;
  }
  &:hover {
    .leftArrow,
    .rightArrow {
      display: block;
    }
  }
`;
const WrapImg = styled.div`
  /* transform: ${props => `translate3d(${props.curwidth}px,0,0)`};
  transition: 0.5s ease-in; */
`;
