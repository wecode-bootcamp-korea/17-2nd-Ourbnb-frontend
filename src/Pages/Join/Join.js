import './Join.scss';
import React from 'react';
import { kakaoapi } from '../../config';
// import { render } from 'react-dom/cjs/react-dom.development';
// import { render } from '@testing-library/react';

const Join = props => {
  const { setIsJoin } = props;

  const kakaoLogin = () => {
    const { Kakao } = window;
    Kakao.Auth.login({
      success: function (response) {
        fetch(kakaoapi, {
          method: 'POST',
          headers: {
            Authorization: response.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            if (res.access_token) {
              localStorage.setItem('access_token', res.access_token);
              alert('로그인성공');
              setIsJoin(false);
            } else {
              alert('다시확인해주세요');
            }
          });
      },
      fail: function (err) {
        console.log('에러', err);
        alert('로그인실패!');
      },
    });
  };

  const { handlePropsData } = props;

  return (
    <div className="login">
      <header className="loginHeader">로그인</header>
      <div className="loginContianer">
        <div className="loginInput">
          <input
            className="loginInputId"
            placeholder="전화번호를 입력해주세요"
            type="text"
          />
          <input
            className="loginInputPw"
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
        </div>
        <p className="loginText">
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
          데이터 요금이 부과됩니다.
        </p>
        <button className="loginButton" type="submit">
          계속
        </button>
        <div className="line"></div>

        <section>
          <div className="socialLogin">
            <div className="kakaoLogin">
              <button className="kakao" type="submit" onClick={kakaoLogin}>
                kakao
              </button>
              <img src="/images/kakao.jpg" alt="plus" className="kakaoImg" />
            </div>
            <div className="googleLogin">
              <img src="/images/google.jpg" alt="plus" className="googleImg" />
              <button className="google" type="submit">
                Google
              </button>
            </div>
            <div className="joinText">
              에어비엔비계정이 없으신가요?
              <button className="join" type="submit" onClick={handlePropsData}>
                회원가입
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Join;
