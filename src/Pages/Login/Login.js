import React, { Component } from 'react';
import './Login.scss';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <header className="loginHeader">{this.props.title}</header>

        <div className="loginContianer">
          <div className="loginInput">
            <input
              className="loginInputId"
              placeholder="전화번호를 입력해주세요"
              type="text"
            ></input>
            <input
              className="loginInputPw"
              placeholder="비밀번호를 입력해주세요"
              type="password"
            ></input>
          </div>
          <p className="loginText">
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </p>
          <button
            onClick={this.props.onClickSubmit}
            className="loginButton"
            type="submit"
          >
            {this.props.title}
          </button>
          <div className="line"></div>

          <section>
            <div className="socialLogin">
              <button className="kakao" type="submit">
                <RiKakaoTalkLine className="kakaoIcon" />
                kakao
              </button>
              <button className="google" type="submit">
                <AiFillGoogleSquare className="googleIcon" />
                Google
              </button>
              <p className="joinText">
                {this.props.questionDiscription}
                <button className="join" type="submit">
                  {this.props.title}
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
