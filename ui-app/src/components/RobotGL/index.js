import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { createStore } from 'redux'
import 'typeface-roboto'
import RobotGLReducer from './reducers'
import RobotGLContainer from './containers/RobotGL'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height:'90vh',
    width: '100%',
    display: 'flex'
  },
});

const store = createStore(RobotGLReducer);

class RobotGL extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <div className = {classes.root}>
          <RobotGLContainer/>
        </div>
      </Provider>
    );
  }
}

export default withStyles(styles)(RobotGL);
