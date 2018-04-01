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
import Tooltip from 'material-ui/Tooltip';
 import * as THREE from 'three'


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin:  theme.spacing.unit,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  tabContainer: {
    flexGrow: 1,
    marginLeft: 10,
  },
  button: {
    margin: theme.spacing.unit,

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

class RobotGL extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  componentDidMount() {

  }

  init = () => {
    this.container = document.getElementById( 'container' );

		this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );

    this.camera.position.z = 5;
    this.animate();
  }

  animate = () =>{
  	requestAnimationFrame( this.animate );
  	this.renderer.render( this.scene, this.camera );
  }

  render() {
    const { classes } = this.props;

    return(
    <div id='container' className={classes.root} >

    </div>
    );
  }
}
// Menu.propTypes = {
//   currentTab: PropTypes.number.isRequired,
//   code: PropTypes.string.isRequired,
// }

export default withStyles(styles)(RobotGL);
