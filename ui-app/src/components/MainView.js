import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import InfoIcon from 'material-ui-icons/Info';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';


import {StartStreaming} from '../javascripts/camvasmodules.js';
import ProjectList from './ProjectList'
import RlEditor from './RlEditor'
import * as C from '../constants/Constants'

import io from 'socket.io-client';
const iosocket = io('http://localhost:3000');




iosocket.on('connect', () => {
  console.log('socket.id'); // 'G5p5...'
});

iosocket.on('message', (data) => {
  cnt = data;
  console.log('form Mainview');
  console.log(data);
});
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  naviBar: {
    position: 'fixed',
    flexGrow: 1,
    marginTop: 0,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    top: 0,
    left: 240,
    transition: theme.transitions.create(['left', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  naviBarShift: {
    position: 'fixed',
    marginTop: 0,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    top: 0,
    left: 60,
    transition: theme.transitions.create(['left', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  naviButton: {
    height: C.navHeight,
    margin: 0,
    justifyContent: 'flex-start',
  },
  tabContainer: {
    position: 'absolute',
    display: 'flex',
    flexGrow: 1,
    margin:  0,
    top: C.navHeight,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: theme.palette.container.backgroundColor,
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" className={props.className} >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTab: 0,
    };
  }
  componentDidMount() {
    //var ctx = this.refs.canvas.getContext('2d');
    //StartStreaming(ctx);
  }
  handleChangeTab = (event, selectedTab) => {
    this.setState({ selectedTab });
  };

  render() {
    const { classes } = this.props;
    const { currentView } = this.props;
    const { selectedTab } = this.state;
    return(
    <div className={classes.root}>
    <AppBar position="fixed" className={classNames(classes.naviBar, !this.props.menuOpen && classes.naviBarShift)}>
        <BottomNavigation
          value={selectedTab}
          onChange={this.handleChangeTab}
          showLabels
          className={classes.naviButton}
        >
        <BottomNavigationAction label="System Information" icon={<InfoIcon />} />
        <BottomNavigationAction label="Recents" icon={<InfoIcon />} />
      </BottomNavigation>
    </AppBar>
      {selectedTab === 0 &&
        <TabContainer className={classes.tabContainer}>
        KKK
        </TabContainer>
      }
      {selectedTab === 1 &&
        <TabContainer className={classes.tabContainer}>
        JJJ
        </TabContainer>
      }
    </div>
    );
  }
}

export default withStyles(styles)(MainView);
