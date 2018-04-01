import { connect } from 'react-redux';
import Menu from '../components/Menu';
import {menuActions} from '../reducers/Menu'

const mapStateToProps = state => {
  const index =  state.RlEditorReducer.sourceTabsActions.currentFileIndex;
  console.log(index)
  return {
    text: state.menuActions.text,
    projectName: state.RlEditorReducer.menuActions.projectName,
    fileIndex: state.RlEditorReducer.sourceTabsActions.currentFileIndex,
    fileName: state.RlEditorReducer.sourceTabsActions.list[index],
    content: state.RlEditorReducer.editorActions.codes[index],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(testAction(idx))
    }
  };
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuContainer
