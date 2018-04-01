import { connect } from 'react-redux';
import * as actions from '../Actions';
import * as proejctListActions from '../components/ProjectList/actions/ProjectList';
import RlView from '../components/RlView';

const mapStateToProps = state => {
  return {
    code: state.rlViewActions.code,
    currentTab: state.rlViewActions.currentTab,
    menuOpen: state.menuActions.open,
    openingProject: state.ProjectListReducer.projectListActions.name == null? false:true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(actions.testAction(idx))
    },
    saveCode: (code) => {
      dispatch(actions.saveCode(code))
    },
    changeTab: (idx) => {
      dispatch(actions.changeTab(idx))
    },
    projectOpened: () => {
      dispatch(proejctListActions.setOpenProject(null));
    }
  };
}

const RlViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RlView)

export default RlViewContainer
