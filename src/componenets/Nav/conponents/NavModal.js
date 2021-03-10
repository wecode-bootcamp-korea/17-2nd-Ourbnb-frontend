import React from 'react';
import Join from '../../../Pages/Join/Join';

class NavModal extends React.Component {
  constructor() {
    super();
    this.state = {
      Join: false,
    };
  }

  joinClick = () => {
    this.setState({ Join: !this.state.Join });
  };

  render() {
    return (
      <div className="List">
        <div className="join" onClick={this.joinClick}>
          로그인
        </div>
        {this.state.Join && <Join />}
        <div className="host">호스트등록하기</div>
        <div className="kakao">카카오 로그인</div>
        <div className="google">구글 로그인</div>
        <div className="mypage" onClick={this.travelClick}>
          {' '}
          여행
        </div>
      </div>
    );
  }
}

export default NavModal;
