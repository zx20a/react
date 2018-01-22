import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import TabView from './TabView';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,    
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    left: 250,
    top: 0,
  },  
  view: {
    marginLeft: 250,
  }
});

class ServoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  
  render() {
    const { classes } = this.props;
    return(      
      <div className={classes.root}>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <TabView/>
      </div>
    );
  }
}

export default withStyles(styles)(ServoView);
