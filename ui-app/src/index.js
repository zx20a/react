import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createMuiTheme} from 'material-ui/styles'
import {lightBlue500} from 'material-ui/colors'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import 'typeface-roboto'
import './index.css';

import todoApp from './Reducers'

const muiTheme = createMuiTheme({
	palette: {
		paccent1Color: lightBlue500,
	}
})

let store = createStore(todoApp)

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



const ThemeApp = () => (
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeApp />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
