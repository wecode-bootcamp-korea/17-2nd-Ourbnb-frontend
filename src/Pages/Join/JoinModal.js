import React, { Component } from 'react';
import Join from './Join';

class JoinModal extends Component {
  state = {
    isLogin: false,
  };

  handlePropsData = () => {
    const { isLogin } = this.state;
    this.setState({ isLogin: isLogin ? signInProps : JoinProps });
    console.log('ㅎㅇ');
  };

  render() {
    // const { isLogin } = this.state;
    return (
      <div className="Modal">
        <Join
          handlePropsData={this.handlePropsData}
          // fomet={isLogin ? signInProps : JoinProps}
        />
      </div>
    );
  }
}

const JoinProps = {
  type: 'signUp',
  text: '회원가입',
  data: [
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
  ],
  message: '이미 계정을 보유하고 계시나요?',
  messageButton: '로그인',
};

const signInProps = {
  type: 'signIn',
  title: '회원가입',
  data: [
    {
      type: 'email',
      text: '이메일',
    },
    {
      type: 'password',
      text: '비밀번호',
    },
  ],
  message: '에어비엔비 계정이 없으세요?',
  messageButton: '회원가입',
};

export default JoinModal;
