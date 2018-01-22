import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeView, testAction} from '../Actions'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import PowerIcon from 'material-ui-icons/PowerSettingsNew'
import RLIcon from 'material-ui-icons/ModeEdit'
import CommandIcon from 'material-ui-icons/Gamepad'

import {MAIN_VIEW_IDX} from '../constants/Constants'

const menuWidth = 240;
const styles = theme => ({
  root: {
    position: 'absolute',
    height: '100%',
    width: menuWidth,
    menuHeader: theme.mixins.toolbar,
  },
  header: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: menuWidth,
  },
});

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer type="permanent" anchor="left" docked="true"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <Typography type="title" gutterBottom className = {classes.header}>
          Delta PCC{this.props.selectedView}
        </Typography>
        <Divider/>
        <Divider/>
          <List>
            <ListItem button onClick={() => this.props.onMenuButtonClick(0)}>
              <ListItemIcon><PowerIcon/></ListItemIcon><ListItemText primary="Power" />
            </ListItem>
            <ListItem button onClick={() => this.props.onMenuButtonClick(1)}>
              <ListItemIcon><CommandIcon/></ListItemIcon><ListItemText primary="Command" />
            </ListItem>
            <ListItem button onClick={() => this.props.onMenuButtonClick(2)}>
              <ListItemIcon><RLIcon/></ListItemIcon><ListItemText primary="Delta RL Editor" />
            </ListItem>
          </List>
        </Drawer>
        <Divider/>
      </div>
    );
  }
}

MainMenu.propTypes = {
  selectedView: PropTypes.number.isRequired,
}

export default (withStyles(styles)(MainMenu));
