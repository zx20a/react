import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import TabView from './TabView';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';
import {StartStreaming} from '../javascripts/camvasmodules.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
  },
  tabContainer: {
    marginLeft: 250,
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedTab: 0,
    };
  }
  componentDidMount() {
    //var ctx = this.refs.canvas.getContext('2d');
    //StartStreaming(ctx);
  }
  handleChangeTab = (event, selectedTab) => {
    this.setState({ selectedTab });
  };
  render() {
    const { classes } = this.props;
    const { currentView } = this.props;
    const { selectedTab } = this.state;
    return(
    <div className={classes.root}>
        <AppBar position="absolute">
          <Tabs
            value={selectedTab}
            onChange={this.handleChangeTab}
            scrollable
            scrollButtons="on"
            fullWidth
            >
            <Tab label="Item One" icon={<PhoneIcon />} />
            <Tab label="Item Two" icon={<FavoriteIcon />} />
            <Tab label="Item Three" icon={<PersonPinIcon />} />
            <Tab label="Item Four" icon={<HelpIcon />} />
            <Tab label="Item Five" icon={<ShoppingBasket />} />
            <Tab label="Item Six" icon={<ThumbDown />} />
            <Tab label="Item Seven" icon={<ThumbUp />} />
          </Tabs>
          {selectedTab === 0 && <TabContainer>{currentView}Item One</TabContainer>}
          {selectedTab === 1 && <TabContainer>Item Two</TabContainer>}
          {selectedTab === 2 && <TabContainer>Item Three</TabContainer>}
          {selectedTab === 3 && <TabContainer>Item Four</TabContainer>}
          {selectedTab === 4 && <TabContainer>Item Five</TabContainer>}
          {selectedTab === 5 && <TabContainer>Item Six</TabContainer>}
          {selectedTab === 6 && <TabContainer>Item Seven</TabContainer>}
        </AppBar>
        //<canvas width={1024} height={768} ref="canvas"></canvas>
    </div>
    );
  }
}

export default withStyles(styles)(MainView);
