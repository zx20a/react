import { connect } from 'react-redux';
import MainView from '../components/MainView';

const mapStateToProps = state => {
  console.log('View state updated'); // state
  console.log(state); // state
  return {
    currentView: state.menuActions.selectedView
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
