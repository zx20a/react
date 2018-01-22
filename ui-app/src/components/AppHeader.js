import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import logo from '../logo.svg';
import '../App.css';
import TabView from './TabView';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    right: 15,
    left: 260,
  },
  header: {
    top: 0,
    height: 150,
    backgroundColor: '#222',
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    padding: '0',
  },
  title: {
    fontSize: '2em',
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  }
});

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <h1 className={classes.title}>Welcome to React2</h1>
      </header>
      </div>
    );
  }
}

export default withStyles(styles)(AppHeader);
