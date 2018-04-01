import { connect } from 'react-redux';
import ProjectList from '../components/ProjectList';
import * as actions from '../actions/ProjectList';
import * as rlEditorMenuActions from '../../RlEditor/actions/Menu';
import * as sourceTabsActions from '../../RlEditor/actions/SourceTabs';
import ProjectListReducer from '../reducers'

const mapStateToProps = state => {
  return {
    text: state.ProjectListReducer.projectListActions.text,
    list: state.ProjectListReducer.projectListActions.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (text) => {
      dispatch(actions.testAction(text))
    },
    setList2ProjectList: (list) => {
      dispatch(actions.updateList(list))
    },
    setOpenProject: (name) => {
      dispatch(actions.setOpenProject(name))
      dispatch(rlEditorMenuActions.setCurrentProject(name));
      dispatch(sourceTabsActions.setIsOpeningProject(true));
    }
  };
}

const ProjectListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default ProjectListContainer
