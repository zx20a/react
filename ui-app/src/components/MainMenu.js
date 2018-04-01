import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeView, testAction} from '../Actions'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import Menu, { MenuList, MenuItem } from 'material-ui/Menu';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DashboardIcon from 'material-ui-icons/Dashboard';
import MenuIcon from 'material-ui-icons/Menu';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import PowerIcon from 'material-ui-icons/PowerSettingsNew'
import ProjectsIcon from 'material-ui-icons/BookmarkBorder'
import CommandIcon from 'material-ui-icons/Gamepad'
import CloseMenuIcon from 'material-ui-icons/KeyboardArrowLeft';
import OpenMenuIcon from 'material-ui-icons/KeyboardArrowRight';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import InfoIcon from 'material-ui-icons/Info';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';

import { FormattedMessage, FormattedDate,FormattedRelative } from 'react-intl';

import {MAIN_VIEW_IDX, menuWidth, closedMenuWidth} from '../constants/Constants';

const styles = theme => ({
  root: {
    flex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: menuWidth,
    menuHeader: theme.mixins.toolbar,
  },
  header: {
    margin: theme.spacing.unit * 3,
  },

  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  selected: {
    backgroundColor: theme.palette.common.white,
  },
  menuitemSelected: {
    backgroundColor: theme.palette.primary.main,
    '& $primary, & $icon': {
      color: theme.palette.common.white,
    },
  },
  primary: {},
  icon: {},

  subMenuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },

  drawerFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  avatarDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& $avatar': {
      margin: theme.spacing.unit,
      width: 40,
      height: 40,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
  avatar: {},
  closeButton : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  drawerPaper: {
    width: menuWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: closedMenuWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      expan: false
    }
    this.userNameHead = this.props.userName[0].toUpperCase();
  }
  handleDrawerOpen = () => {
    this.props.openMenu();
  };

  handleDrawerClose = () => {
    this.props.closeMenu();
  };
  render() {
    const { classes } = this.props;
    const { userName } = this.props;

    return (
      <div className={classes.root}>
        HELLO
        <Drawer variant="permanent" anchor="left" docked="true"
          classes={{
            paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
          }}
        >
          <Typography variant="title" className = {classes.header}>
          <ListItem>
       <FormattedMessage id='hello'/>
          </ListItem>
          </Typography>
          <Divider/>
            <List>
              <ListItem button className={classNames(classes.menuItem,
                                  this.state.selectedItem===0 && classes.menuitemSelected)}
                onClick={() => {this.setState({expan: true})}}
                >
                <ListItemIcon className={classes.icon}><DashboardIcon/></ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
                 {this.state.expan? <ExpandLessIcon/> : <ExpandMoreIcon/>}
              </ListItem>
              <Collapse in={this.state.expan} timeout="auto" unmountOnExit>
                 <List component="div" disablePadding>
                   <ListItem button >
                     <ListItemIcon>
                       <InfoIcon/>
                     </ListItemIcon>
                     <ListItemText inset primary="System Information" />
                   </ListItem>
                   <ListItem button >
                     <ListItemIcon>
                       <InfoIcon/>
                     </ListItemIcon>
                     <ListItemText inset primary="System Information" />
                   </ListItem>
                 </List>
               </Collapse>
            </List>
            <MenuList>

              <MenuItem className={classNames(classes.menuItem,
                                  this.state.selectedItem===0 && classes.menuitemSelected)}
                onClick={() => {this.props.onMenuButtonClick(0);
                                this.setState({selectedItem: 0})}}
                >
                <ListItemIcon className={classes.icon}><DashboardIcon/></ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} inset primary="Dashboard" />
              </MenuItem>
              <MenuItem className={classNames(classes.menuItem,
                                  this.state.selectedItem===1 && classes.menuitemSelected)}
                onClick={() => {this.props.onMenuButtonClick(1);
                                this.setState({selectedItem: 1})}}
                >
                <ListItemIcon className={classes.icon}><ProjectsIcon/></ListItemIcon>
                <ListItemText classes={{ primary: classes.primary }} primary="Projects" />
              </MenuItem>
            </MenuList>
            <div className={classes.drawerFooter}>
            <Divider/>
            <div className={classes.avatarDiv}>
              <IconButton className={classes.avatar}>{this.userNameHead}</IconButton>
              <Typography variant="body1">
                {this.props.open === true && userName}
              </Typography>
            </div>
            <Divider/>
            <div className = { classes.closeButton }>
              {this.props.open === false && <IconButton onClick={()=>this.handleDrawerOpen()}><OpenMenuIcon/></IconButton>}
              {this.props.open === true && <IconButton onClick={()=>this.handleDrawerClose()}><CloseMenuIcon/></IconButton>}
            </div>
            </div>
        </Drawer>
      </div>
    );
  }
}

MainMenu.propTypes = {
  selectedView: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
}

export default (withStyles(styles)(MainMenu));
