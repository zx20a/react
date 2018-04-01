import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
//Icons
import ListIcon from 'material-ui-icons/List';
import CodeIcon from 'material-ui-icons/Code';
import RedoIcon from 'material-ui-icons/Redo';
//Dialog icons
import WarningIcon from 'material-ui-icons/Warning'
//Project files
import Svg from './Svg';
import ProjectList from './ProjectList'
import RlEditor from './RlEditor'
import * as C from '../constants/Constants'
//Third-party
import SwipeableViews from 'react-swipeable-views';
var FileSaver = require('file-saver');
import {StartStreaming} from '../javascripts/camvasmodules.js';

var axios = require('axios');
// Texts
import * as texts from '../constants/DialogConstants'

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
    left: C.menuWidth,
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
    left: C.closedMenuWidth,
    transition: theme.transitions.create(['left', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  naviButton: {
    height: C.navHeight,
    width: C.navWidth,
    margin: 0,
    justifyContent: 'flex-start',
  },
  tabContainer: {
    position: 'fixed',
    display: 'flex',
    flexGrow: 1,
    margin:  0,
    top: C.navHeight,
    right: 0,
    left: C.menuWidth,
    bottom: 0,
    height: '100vh'- C.navHeight,
    backgroundColor: theme.palette.container.backgroundColor,
    transition: theme.transitions.create(['left', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  tabContainerShift: {
    position: 'fixed',
    display: 'flex',
    flexGrow: 1,
    margin:  0,
    top: C.navHeight,
    right: 0,
    left: C.closedMenuWidth,
    bottom: 0,
    height: '100vh'- C.navHeight,
    backgroundColor: theme.palette.container.backgroundColor,
    transition: theme.transitions.create(['left', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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

class RlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }
  componentDidMount() {
    //var ctx = this.refs.canvas.getContext('2d');
    //StartStreaming(ctx);
  }
  handleChangeTab = (event, selectedTab) => {
    this.props.changeTab(selectedTab);
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  retriveProjects = () => {
    console.log('Retrive Projects');

  }

  render() {
    const { classes } = this.props;
    const { code } = this.props;
    const { currentTab } = this.props;
    const { dialogOpen } = this.state;
    if (this.props.openingProject) {
      this.props.changeTab(1);
      this.props.projectOpened();
    }
    return(
    <div className={classes.root}>
      <AppBar position="fixed" className={classNames(classes.naviBar, !this.props.menuOpen && classes.naviBarShift)}>
          <BottomNavigation
            value={currentTab}
            onChange={this.handleChangeTab}
            showLabels
            className={classes.naviButton}
          >
          <BottomNavigationAction label="Project List" icon={<ListIcon />} />
          <BottomNavigationAction label="Editor" icon={<CodeIcon />} />
        </BottomNavigation>
      </AppBar>
      {currentTab === 0 &&
        <TabContainer className={classNames(classes.tabContainer, !this.props.menuOpen && classes.tabContainerShift)}>
        <ProjectList pjtList={this.props.projectList}/>
        </TabContainer>
      }
      {currentTab === 1 &&
        <TabContainer className={classNames(classes.tabContainer, !this.props.menuOpen && classes.tabContainerShift)}>
          <RlEditor/>
        </TabContainer>
      }
    </div>
    );
  }
}
RlView.propTypes = {
  currentTab: PropTypes.number.isRequired,
}

export default withStyles(styles)(RlView);
