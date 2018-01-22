import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { testAction, changeView} from './Actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { GridList, GridListTile } from 'material-ui/GridList';
import Typography from 'material-ui/Typography';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';
import AppHeader from './components/AppHeader';
import MainView from './components/MainView';
import RlView from './components/RlView';
import appReducer from './Reducers';
import MainMenuContainer from './containers/MainMenuContainer';
import ViewsCollectionContainer from './containers/ViewsCollectionContainer';


const menuWidth = 240;

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  view: {
    position: 'absolute',
    width: `calc(100% - ${menuWidth}px)`,
    marginLeft: menuWidth,
  },
  vieww: {
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.background.paper,
      position: 'fixed',
      right: 20,
      left: 260,
      top: 100,
    },
    view: {
      marginLeft: 250,
    },
  },
  menu: {
    position: 'relative',
    height: '100%',
    width: menuWidth,
    menuHeader: theme.mixins.toolbar,
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const store = createStore(appReducer);

class App extends Component {
  // constructor(props, context) {
  //   super(props, context);
  //
  //   this.state = {
  //     open: false,
  //     selectedView: 0,
  //   };
  // }

  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div className = {classes.root}>
          <MainMenuContainer/>
          <AppHeader/>
          <ViewsCollectionContainer/>
        </div>
    </Provider>
    );
  }
}

export default withStyles(styles)(App);
