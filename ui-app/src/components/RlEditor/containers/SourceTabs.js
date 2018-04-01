import { connect } from 'react-redux';
import SourceTabs from '../components/SourceTabs';
import * as srcTabsActions from '../actions/SourceTabs';
import * as editorActions from '../actions/Editor';

const mapStateToProps = state => {
  return {
    projectName: state.RlEditorReducer.menuActions.projectName,
    srcList: state.RlEditorReducer.sourceTabsActions.list,
    srcContents: state.RlEditorReducer.sourceTabsActions.codes,
    isOpeningProject: state.RlEditorReducer.sourceTabsActions.isOpeningProject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSrcList: (list) => {
      dispatch(srcTabsActions.updateSrcList(list))
    },
    updateSrcContents: (codes) => {
      dispatch(srcTabsActions.updateSrcContents(codes))
    },
    setIsOpeningProject: (value) => {
      dispatch(srcTabsActions.setIsOpeningProject(value))
    },
    saveCodes: (codes) => {
      //dispatch(editorActions.clearCodes())
      codes.map((code, idx) => {
        dispatch(editorActions.saveCode(idx, code))
      });
    },
    setCurrentFileIndex: (idx) => {
      dispatch(srcTabsActions.setCurrentFileIndex(idx))
    },
  };
}

const SourceTabsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SourceTabs)

export default SourceTabsContainer
