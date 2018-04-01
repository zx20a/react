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
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
//Icons
import Typography from 'material-ui/Typography';
import DashboardIcon from 'material-ui-icons/Dashboard';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';
import CodeIcon from 'material-ui-icons/Code';
import NewIcon from 'material-ui-icons/NoteAdd';
import PlayIcon from 'material-ui-icons/PlayArrow';
import PauseIcon from 'material-ui-icons/Pause';
import StopIcon from 'material-ui-icons/Stop';
import SaveIcon from 'material-ui-icons/Save';
import UndoIcon from 'material-ui-icons/Undo';
import RedoIcon from 'material-ui-icons/Redo';
import MoreVertIcon from 'material-ui-icons/MoreVert';
//Dialog icons
import WarningIcon from 'material-ui-icons/Warning'
var FileSaver = require('file-saver');
//CodeMirror

var axios = require('axios');

const styles = theme => ({
  root: {
    flexGrow: 0,
    margin: 0,
    backgroundColor: theme.palette.primary.dark,
    right: 0,
    left: 0,
    top: 0,
  },
  listRoot: {
    height: 24,
    marginLeft: 0,
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.common.white,
  },
  listItem: {
    height: 24,
    marginLeft: 0,
    justifyContent: 'flex-start',
  },
  button: {
    color: theme.palette.primary.main,
    justifyContent: 'center',
    margin: 0,
    minWidth: 24,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    margin: 0,
    color: theme.palette.primary.main,
    minWidth: 24,
  },
  leftIcon: {

  },
  fileDialog: {
     opacity: 0,
     display: 'block',
     visibility: 'hidden',
     width: 0,
     height: 0,
  }
});

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // };
  }
  componentDidMount() {
    //var ctx = this.refs.canvas.getContext('2d');
    //StartStreaming(ctx);
  }
  handleChangeTab = (event, selectedTab) => {
    this.setState({ selectedTab });
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

  saveRl = () => {
    console.log('save RL');
    console.log(this.props.projectName)
    console.log(this.props.fileName)
    console.log(this.props.content)

    axios.post('/rlEditor/saveRl', {
        projectName: this.props.projectName,
        fileName: this.props.fileName,
        content: this.props.content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
  };

  downloadRl = () => {
    console.log('Download current edited RL');
    // this.refs.fileDialog.click();
    // var text = this.props.code;
    // var filename = 'test';
    // var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, filename+".lua");
  };

  runRl = () => {
    console.log('run RL');
    console.log(this.props.projectName)

    axios.post('/rlEditor/runRl', {
        projectName: this.props.projectName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    });
  };

  handleChange = (selectorFiles: FileList) => {
    console.log(selectorFiles);
  }

  undo = () => {
  };

  redo = () => {
  };

  render() {
    const { classes } = this.props;

    return(
    <div className={classes.root} >
      <List component="nav" className={classes.listRoot}>
        <ListItem className={classes.listItem}>
        <Tooltip title="New" >
        <Button className={classes.button} size='small'>
          <NewIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Save">
        <Button  className={classes.button} onClick = {()=> this.saveRl()} size='small'>
          <SaveIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Download">
        <Button  className={classes.button} onClick = {()=> this.downloadRl()} size='small'>
          <FileDownloadIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Run">
        <Button  className={classes.button} onClick = {()=> this.runRl()} size='small'>
          <PlayIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Pause">
        <Button  className={classes.button} onClick = {()=> this.handleDialogClose()} size='small'>
          <PauseIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Stop">
        <Button  className={classes.button} size='small'>
          <StopIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Undo">
        <Button  className={classes.button} onClick = {()=> this.undo()} size='small'>
          <UndoIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Tooltip title="Redo">
        <Button  className={classes.button} onClick = {()=> this.redo()} size='small'>
          <RedoIcon className={classes.leftIcon} />
        </Button>
        </Tooltip>
        <Button className={classes.rightButton} size='small'>
          {this.props.projectName!=null && this.props.projectName}
          <MoreVertIcon className={classes.leftIcon} />
        </Button>
        <div className={classes.fileDialog}>
          <input ref="fileDialog" type="file" onChange={ (e) => this.handleChange(e.target.files) } />
        </div>
        </ListItem>
        </List>
    </div>
    );
  }
}
// Menu.propTypes = {
//   currentTab: PropTypes.number.isRequired,
//   code: PropTypes.string.isRequired,
// }

export default withStyles(styles)(Menu);
