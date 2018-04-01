import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import ButtonBase from 'material-ui/ButtonBase';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
var dateFormat = require('dateformat');

const styles = theme => ({
  widget: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  }
});

class ProjectWidget extends Component {
  render() {
    const { classes } = this.props;
    const { name } = this.props;
    const { birthTime } = this.props;
    const { rmFunc } = this.props;
    return (
      <div className={ classes.widget }>
      <ListItem button onClick={()=>this.props.onClickFunc(name)}>
      <Avatar>
        <FolderIcon />
      </Avatar>
        <ListItemText
        primary={name}
        secondary={dateFormat(birthTime)} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={()=>this.props.rmFunc(name)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <li>
      <Divider inset/>
      </li>
      </div>
    );
  }
}

ProjectWidget.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  birthTime: PropTypes.string.isRequired,
  rmFunc: PropTypes.func.isRequired,
  onClickFunc: PropTypes.func.isRequired,
}

export default withStyles(styles)(ProjectWidget);
