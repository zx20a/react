import { connect } from 'react-redux';
import MainView from '../components/MainView';

const mapStateToProps = state => {
  return {
    currentView: state.menuActions.selectedView,
    menuOpen: state.menuActions.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(testAction(idx))
    }
  };
}

const MainViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)

export default MainViewContainer
