import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
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
import * as texts from '../../constants/DialogConstants'

class SaveFileDialog extends Component {

  render() {
    return(
    <Dialog open={dialogOpen} onClose={this.handleClose}>
      <DialogTitle><WarningIcon/>{texts.sWarning}</DialogTitle>
      <DialogContent>
        <DialogContentText>{texts.sErrText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={()=>this.handleDialogClose()}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
  }
}

export default withStyles(styles)(SaveFileDialog);
