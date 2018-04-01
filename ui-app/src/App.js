import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { testAction, changeView} from './Actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { GridList, GridListTile } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import './App.css';
import MainMenu from './components/MainMenu';
import AppHeader from './components/AppHeader';
import MainView from './components/MainView';
import RlView from './components/RlView';
import appReducer from './Reducers';
import AppHeaderContainer from './containers/AppHeaderContainer';
import MainMenuContainer from './containers/MainMenuContainer';
import ViewsCollectionContainer from './containers/ViewsCollectionContainer';
import { addLocaleData, IntlProvider } from 'react-intl';
import zh_TW from './locale/zh_TW';
import en_US from './locale/en_US';
import ja_JP from './locale/ja_JP';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';//zh-Hans zh-Hant
import ja from 'react-intl/locale-data/ja';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    top: 0,
    buttom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.primary.main,
  },
});

const store = createStore(appReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.appLocale = "ja"
    this.userLocale = "zh_TW"
    console.log(this.appLocale);
    addLocaleData(zh);
    addLocaleData(ja);
  }



  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
      <IntlProvider locale='zh-Hant'
        messages={en_US}
        >
        <div className = {classes.root}>
          <MainMenuContainer/>
          <ViewsCollectionContainer/>
        </div>
      </IntlProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
