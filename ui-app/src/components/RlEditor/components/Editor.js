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
import Tooltip from 'material-ui/Tooltip';
// CodeMirror
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/lua/lua';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/comment-fold';
import './Editor.css';
// Projects
import Svg from '../../Svg';
import bpSvg from '../../../assets/images/breakpoint.svg';
// var bpSvg = require("svg-inline-loader!../../../assets/images/breakpoint.svg");
import InlineSVG from 'svg-inline-react';


const styles = theme => ({
  root: {
    backgroundColor: '#9E9E9E',
    position: 'relative',
  },
  button: {
    margin: 0,
    backgroundColor: theme.palette.background.paper,
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

function makeMarker2() {
 var marker = document.createElement("div");
 marker.style.color = "#822";
 marker.innerHTML = "●";
 return marker;
}

const breakpointSvg = document.createElement("div");
ReactDOM.render(<Svg name="breakpoint" />, breakpointSvg);
function makeMarker(isEnabled) {
  const bp = breakpointSvg.cloneNode(true);
  bp.className = classNames(
    "editor breakpoint",
    { "breakpoint-disabled": !isEnabled }
  );
  return bp;
}


class Editor extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.editor = CodeMirror.fromTextArea(this.textarea, {
      lineNumbers: true,
      lineWrapping: true,
      foldGutter: true,
      viewportMargin: Infinity,
      mode: "lua",
      gutters: [
        "breakpoints",
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter"
      ],
      extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }}
    });
    this.codemirror = CodeMirror;
    this.editor.on("gutterClick", this.gutterClickHandle);
    this.editor.on("change", this.changeHandle);
    this.editor.on("beforeChange", this.beforeChangeHandle);
    console.log(this.props)
    if (this.props.codes[this.props.index]) {
      console.log('update value')
      console.log(this.props.codes[this.props.index])
      this.editor.setValue(this.props.codes[this.props.index])
      this.forceUpdate();
    }
    this.cmDoc = CodeMirror.doc;
  }

  componentWillReceiveProps(nextProps) {
    console.log("Receive Props")
    console.log(nextProps)
    const {index} = nextProps;
    console.log(index)
    if (nextProps.codes[nextProps.index] != undefined){
      console.log("OK1")

      if (nextProps.codes[nextProps.index] !== this.props.codes[nextProps.index]) {
        console.log('update value1')
        this.editor.setValue("nextProps.codes[this.props.index]")
        forceUpdate();
      }
    }

  }

  componentWillUnmount() {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    console.log("shouldComponentUpdate")
    console.log(nextProps)
    const {codes} = nextProps;
    console.log(codes)
    return true;
  }

  rightClickHandle = () => {
    console.log("right click")
  }

  leftClickHandle = () => {
    console.log("left click")
  }

  getEventHandleFromProps = () => {
    const propNames = Object.keys(this.props);
    const eventHandle = propNames.filter((prop) => {
      console.log("filter")

      const p = /^on+/;
      console.log(prop)
      return p.test(prop);

    });

    const eventDict = {};
    eventHandle.forEach((ele) => {
      eventDict[ele] = ele.replace(/^on[A-Z]/g, s => s.slice(2).toLowerCase());
      console.log("event handle")
      console.log(ele)
      console.log(eventDict[ele])
    });

    console.log("eventDict")
    console.log(eventDict)
    return eventDict;
  }

  gutterClickHandle = (cm, n, gutter, ev) => {
    var info = cm.lineInfo(n);
    var isBreakpointExist = false;
    if (info.gutterMarkers != null) {
      if ( info.gutterMarkers["breakpoints"] != null) {
        isBreakpointExist = true;
      } else {
        isBreakpointExist = false;
      }
    } else {
      console.log("gutterMarkers is null")
    }
    if (gutter == "breakpoints" || gutter == "CodeMirror-linenumbers") {
      if (ev.button == 0)
        cm.setGutterMarker(n, "breakpoints", isBreakpointExist ? null : makeMarker(true));
      else {
        //cm.setGutterMarker(n, "breakpoints", isBreakpointExist ? null : makeMarker(false));
      }
    }
  }

  changeHandle = (cm, data) => {
    console.log('CHANGEHANDLE')
    console.log(this.editor.getValue())
    if (this.editor.getValue()) {
      this.props.saveCode(this.props.index, this.editor.getValue());
    }
  }
  beforeChangeHandle = (cm, objChanged) => {
  }

  undo = () => {
    // this.refs.aceEditor.editor.undo();
  };

  redo = () => {
    // this.refs.aceEditor.editor.redo();
  };

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <textarea ref={(instance) => { this.textarea = instance; }} />
      </div>
    );
  }
}
Editor.defaultProps = {
}

export default withStyles(styles)(Editor);
