import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './Routes';
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById('root')
);
