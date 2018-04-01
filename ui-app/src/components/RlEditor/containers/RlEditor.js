import { connect } from 'react-redux';
import RlEditor from '../components/RlEditor';
import RlEditorReducer from '../reducers';
import * as menuActions from '../actions/Menu';
import * as editorActions from '../actions/Editor';

const mapStateToProps = state => {
  return {
    text: state.RlEditorReducer.editorActions.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(editorActions.testAction(idx))
    },
  };
}

const RlEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RlEditor)

export default RlEditorContainer
