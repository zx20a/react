import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { createStore } from 'redux'
import 'typeface-roboto'
import RlEditorContainer from './containers/RlEditor'

const styles = theme => ({
  root: {
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 1,
    display: 'flex',
    margin: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.container.backgroundColor,
  },
});

class RlEditor extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <RlEditorContainer/>
        </div>
    );
  }
}

export default withStyles(styles)(RlEditor);
