import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import logo from '../assets/images/logo.svg';
import '../App.css';
import TabView from './TabView';
import { menuWidth, closedMenuWidth,headerHeight } from '../constants/Constants';
import Svg from './Svg';
import SVGInline from "react-svg-inline";
import io from 'socket.io-client';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    right: 0,
    left: menuWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.linear,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  rootShift: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: 0,
    right: 0,
    left: closedMenuWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  header: {
    top: 0,
    height: headerHeight,
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


const iosocket = io('http://localhost:3000');
var cnt = 0;
iosocket.on('connect', () => {
  console.log('socket.id'); // 'G5p5...'
});

iosocket.on('message', (data) => {
  cnt = data;
  console.log('from header');
  console.log(data);
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
      <div className = {classNames(classes.root, !this.props.menuOpen && classes.rootShift)}>
      <header className={classes.header}>
         <SVGInline svg={ logo } width="80" fill="blue" classSuffix={classes.logo}/>
        <h1 className={classes.title}>Welcome to React2</h1>
      </header>
      </div>
    );
  }
}

AppHeader.propTypes = {
  menuOpen: PropTypes.bool.isRequired
}

export default withStyles(styles)(AppHeader);
