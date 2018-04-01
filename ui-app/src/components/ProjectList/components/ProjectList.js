import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
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
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import Tooltip from 'material-ui/Tooltip';
import AddIcon from 'material-ui-icons/Add';
import WarningIcon from 'material-ui-icons/Warning';
// Projects
import ProjectWidget from './ProjectWidget';
import ErrCode from '../constants/ErrorCode';
import * as C from '../constants/Constants';
var axios = require('axios');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    margin: 0,
  },
  tabContainer: {
    flexGrow: 1,
    marginLeft: 0,
  },
  projectWidget: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  addButton: {
    position: 'fixed',
    right: theme.spacing.unit*3,
    bottom: theme.spacing.unit*3,
  },
  rmButton: {
    backgroundColor: theme.palette.primary.warning,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  fileDialog: {
     opacity: 0,
     display: 'block',
     visibility: 'hidden',
     width: 0,
     height: 0,
  }
});


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addDialog: {
        open: false,
        error: false,
        errCode: 0,
      },
      rmDialog: {
        projectName: null,
        open: false,
        error: false,
        errCode: 0,
      },
    }
    this.rmProjectName = null;
    axios.post('/projectList/retriveProjects')
    .then((res)=> {
      this.props.setList2ProjectList(res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  openAddDialog = () => {
    console.log("Add click")
    this.setState({
      addDialog: Object.assign({}, this.state.addDialog, {open: true})
    });
  }

  openDialog = (dialog) => {
    console.log("Open dialog");
    console.log(dialog)
    switch (dialog) {
      case C.ADD_DIALOG:
        this.setState((prevState, props) => ({
          addDialog: Object.assign({}, prevState.addDialog,
            {open: true})
        }));
        break;
      case C.REMOVE_DIALOG:
        this.setState((prevState, props) => ({
          rmDialog: Object.assign({}, prevState.rmDialog,
            {open: true})
        }));
        break;
      default:
    }
  }

  closeDialog = (dialog) => {
    console.log("Close dialog")
    console.log({dialog})
    switch (dialog) {
      case C.ADD_DIALOG:
        this.setState((prevState, props) => ({
          addDialog: Object.assign({}, prevState.addDialog,
            {open: false,error: false, errCode: 0})
        }));
        break;
      case C.REMOVE_DIALOG:
        this.setState((prevState, props) => ({
          rmDialog: Object.assign({}, prevState.rmDialog,
            {open: false,error: false, errCode: 0})
        }));
        break;
      default:
    }
  }
  addProject = () => {
    if (this.fv.value) {
      console.log("Add project");
      console.log(this.fv.value)
      axios.post('/projectList/newProject', {
        name: this.fv.value,
      })
      .then((res)=> {
        if (res.data.errCode == 0) {
          console.log(res)
          console.log('new Pjt OK')
          axios.post('/projectList/retriveProjects')
          .then((res)=> {
            this.props.setList2ProjectList(res.data);
          })
          .catch(function (err) {
            console.log(err);
          });
          this.closeDialog(C.ADD_DIALOG);
        } else {
          console.log('ErrCode:',res.data.errCode);
          this.setState((prevState, props) => ({
            addDialog: Object.assign({},
              prevState.addDialog, {
                error: true,
                errCode: res.data.errCode,
            })
          }));
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    } else {
      this.setState((prevState, props) => ({
        addDialog: Object.assign({},
          prevState.addDialog, {error: true})
      }));
    }
  }

  rmProjectDialog = (name) => {
    console.log("rm project")
    console.log(name)
    this.rmProjectName = name;
    this.setState((prevState, props) => ({
      rmDialog: Object.assign({},
        prevState.rmDialog, {projectName: name})
    }));
    this.openDialog(C.REMOVE_DIALOG);
  }

  rmProject = () => {
    console.log("rm project")
    console.log(this.state.rmDialog.projectName);
    console.log(this.rmProjectName);
    axios.post('/projectList/rmProject', {
      name: this.rmProjectName,
    })
    .then((res)=> {
      if (res.data.errCode == 0) {
        console.log('rm Pjt OK')
        axios.post('/projectList/retriveProjects')
        .then((res)=> {
          this.props.setList2ProjectList(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
        this.closeDialog(C.REMOVE_DIALOG);
      } else {
        console.log('ErrCode:', res.data.errCode);
        this.setState({
          rmDialog: Object.assign({}, this.state.rmDialog,
            {error: true,
             errCode: res.data,
            })
        });
      }
    })
    .catch(function (err) {
      console.log(err);
    });
  }

  openProject = (name) => {
    this.props.setOpenProject(name);
  }
  render() {
    const { classes } = this.props;
    const { list } = this.props;

    return(
      <div className={classes.root}>
        <Dialog
          open={this.state.addDialog.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please type the project name.
              {this.state.addDialog.errCode != 0 && this.state.addDialog.errCode}
            </DialogContentText>
            <TextField
              inputRef={el => this.fv = el}
              autoFocus
              margin="dense"
              id="name"
              label="Project Name"
              fullWidth
              error={this.state.addDialog.error}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.addProject()} color="primary">
              Add
            </Button>
            <Button onClick={()=>this.closeDialog(C.ADD_DIALOG)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.rmDialog.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <WarningIcon/>
            Remove Project {this.rmProjectName != null && " "+this.rmProjectName+"?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              If removed, the project will be permanent deleted.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>this.rmProject(this.rmProjectName)}
              color="primary">
              REMOVE
            </Button>
            <Button variant="raised" onClick={()=>this.closeDialog(C.REMOVE_DIALOG)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <List>
          {list != null &&
            list.projectNames.map((name, idx) => (
              <ProjectWidget key={name} name={name} id={0}
                birthTime={list.birthTimes[idx]}
                rmFunc={this.rmProjectDialog}
                onClickFunc={this.openProject}
              />
          ))}
        </List>

        <Button  variant="fab" color="primary" aria-label="add"
          className={classes.addButton}
          onClick={()=>this.openDialog(C.ADD_DIALOG)}
        >
          <AddIcon />
        </Button>

      </div>
    );
  }
}
ProjectList.defaultProps = {

}

export default withStyles(styles)(ProjectList);
