import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography';
import SwipeableViews from 'react-swipeable-views';
import MainViewContainer from '../containers/MainViewContainer'
import RlViewContainer from '../containers/RlViewContainer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    right: 15,
    left: 260,
    top: 150,
    height: '100%'
  }
});

class ViewsCollection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className = { classes.root }>
        <SwipeableViews>
          {this.props.currentView === 0 && <MainViewContainer/>}
          {this.props.currentView === 2 && <RlViewContainer/>}
        </SwipeableViews>
      </div>
    );
  }
}


ViewsCollection.propTypes = {
  currentView: PropTypes.number.isRequired
}

export default withStyles(styles)(ViewsCollection);
