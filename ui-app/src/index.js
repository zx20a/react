import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {createMuiTheme} from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import green from 'material-ui/colors/green'
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import 'typeface-roboto'
import './index.css';

const muiTheme = createMuiTheme({
	palette: {
		container: {
			backgroundColor: '#BDBDBD',
		},
		primary: {
			light: '#757ce8',
			main: '#2196F3',
			dark: '#002884',
			warning: '#FF9800',
			error: '#D50000',
			contrastText: '#fff',
			background: '#EEEEEE',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
	// Used by `getContrastText()` to maximize the contrast between the background and
	// the text.
	contrastThreshold: 3,
	// Used by the functions below to shift a color's luminance by approximately
	// two indexes within its tonal palette.
	// E.g., shift from Red 500 to Red 300 or Red 700.
	tonalOffset: 0.2,
})

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



const ThemeApp = () => (
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
    <ThemeApp />,
  document.getElementById('root'));
registerServiceWorker();
