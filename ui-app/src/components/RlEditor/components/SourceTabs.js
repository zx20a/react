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
import Typography from 'material-ui/Typography';
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
var axios = require('axios');
import Tooltip from 'material-ui/Tooltip';
// Projects
import EditorContainer from '../containers/Editor';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
    position: 'relative',
    marginTop: 9,
  },
  tabBar: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    minHeight: 12,
  },
  tabs: {
    fontSize: 9,
    height: 24,
    backgroundColor: theme.palette.common.white,
    margin: 0,
    textTransform: 'inherit',
  },
  tabContainer: {
    flexGrow: 0,
    margin: 0,
    top: 0,
    backgroundColor: theme.palette.common.white,
  },
  button: {
    margin: 0,
    backgroundColor: theme.palette.background.paper,
  },
  fileDialog: {
     opacity: 0,
     display: 'block',
     visibility: 'hidden',
     width: 0,
     height: 0,
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" className={props.className}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class SourceTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDoc: 0,
    };
    if (this.props.isOpeningProject) {
      axios.post('/sourceTabs/retriveSrcs', {
        name: this.props.projectName
      })
      .then((res)=> {
        this.props.saveCodes(res.data.srcContents);
        this.props.updateSrcList(res.data.srcNames);
        this.props.setIsOpeningProject(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillUnmount() {
  }

  rightClickHandle = () => {
    console.log("right click")
  }

  leftClickHandle = () => {
    console.log("left click")
  }

  handleDocChange = (event, value) => {
   this.setState({ currentDoc: value });
   this.props.setCurrentFileIndex(value);
 };
  render() {
    const { classes } = this.props;
    const { srcList, srcContents } = this.props;
    const { currentDoc } = this.state;
    const { currentFileIndex } = this.props;

    return(
      <div className={classes.root}>
        <Tabs value={currentFileIndex} onChange={this.handleDocChange} className={classes.tabBar}>
          {srcList != null &&
            srcList.map((name, idx) => (
              <Tab key={idx} value={idx}
              label={name}
              className={classes.tabs}/>
          ))}
        </Tabs>
        {srcList != null &&
          srcList.map((code, idx) => {
            if (currentDoc == idx) {
              return  <TabContainer key={idx} className={classes.tabContainer}>
                <EditorContainer key={idx} index={idx}/>
              </TabContainer>
            }
        })}
      </div>
    );
  }
}
SourceTabs.defaultProps = {
}

export default withStyles(styles)(SourceTabs);
