import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import MainViewContainer from '../containers/MainViewContainer'
import RlViewContainer from '../containers/RlViewContainer'
import RobotGL from './RobotGL'
import { menuWidth, closedMenuWidth,headerHeight} from '../constants/Constants';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    marginLeft: closedMenuWidth,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  rootShift: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    marginLeft: menuWidth,
    width: `calc(100% - ${menuWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  root1: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    marginLeft: closedMenuWidth,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class ViewsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 0,
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classNames(classes.root, this.props.menuOpen && classes.rootShift)}>
        {this.props.currentView === 0 && <MainViewContainer/>}
        {this.props.currentView === 1 && <RlViewContainer/>}
      </div>
    );
  }
}

ViewsCollection.propTypes = {
  currentView: PropTypes.number.isRequired,
  menuOpen: PropTypes.bool.isRequired
}

export default withStyles(styles)(ViewsCollection);
