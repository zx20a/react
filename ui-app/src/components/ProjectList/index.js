import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { createStore } from 'redux'
import 'typeface-roboto'
import ProjectListContainer from './containers/ProjectList'
const styles = theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    margin:  theme.spacing.unit,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.container.backgroundColor,
  },
});

class ProjectList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.root}>
        <ProjectListContainer/>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectList);
