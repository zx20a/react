import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import es from 'react-intl/locale-data/es';
addLocaleData([...en, ...zh, ...es]);

chooseLocale => {
  switch(navigator.language.split('_')[0]){
    case 'en':
      return 'en_US';
      break;
    case 'zh':
      return 'zh_TW';
      break;
    default:
      return 'en_US';
      break;
  }
}
// console.log(chooseLocale());

ReactDOM.render(
  // <IntlProvider locale = {navigator.language} key = {navigator.language}
  //   messages = {chooseLocale()}
  // >
    <App />,
  // </IntlProvider>,
  document.getElementById('root'));
registerServiceWorker();
