import { connect } from 'react-redux';
import Editor from '../components/Editor';
import * as actions from '../actions/Editor'

const mapStateToProps = state => {
  console.log(state)
  return {
    text: state.RlEditorReducer.editorActions.text,
    editorCount: state.RlEditorReducer.editorActions.editorCount,
    codes: state.RlEditorReducer.editorActions.codes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(actions.testAction(idx))
    },
    saveCode: (idx, code) => {
      dispatch(actions.saveCode(idx, code))
    }
  };
}

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)

export default EditorContainer
