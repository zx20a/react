import { connect } from 'react-redux';
import RlView from '../components/RlView';

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

const RlViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RlView)

export default RlViewContainer
