## OurBnB



## 프로젝트 기간
2021.03.02 ~ 2021.03.12

## 프론트엔드

- 허혜성
- 김연주
- 강민지

## 프론트엔드 기술스택

html, css, styled-componenet, scss, Javascript, CRA, React, react-hook

## 프론트엔드 구현목록

## 강민지

### Main 
- daterangepicker를 통한 캘린더 구현
- 날짜, 인원수의 input value값을 querystring을 통해 axios API 통신

### DetailList Page

- react-router를 이용한 page간 props 전달, 이전 페이지에 입력하였던 예약 인원수를 detail list 상단에 표시
- roomtype 체크박스 폼 및 pricerange input 폼 모달창 구현
- filter조건에 따른 state 값을 배열에 담은 뒤 map을 통해 state 상태검사 및 params append, delete - 다중 필터구현(룸 타입을 추가하거나 가격을 조정할 경우 해당 조건에 따라 querystring이 추가되고 삭제되는 로직)
- 조건에 따라 state 상태값을 변경, translateX 값을 변경하여 scroll 기능 구현
- goole-map 활용, 위도와 경도를 서버에서 받아온 data로 부터 추출하여 새로운 state에 저장, maping 하여 fetch된 집들의 위치에 따라 map의 marker 전환 구현.
- Pagenation 구현

