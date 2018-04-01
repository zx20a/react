import { connect } from 'react-redux';
import RobotGL from '../components/RobotGL';
import { robotGLActions } from '../reducers/RobotGL'

const mapStateToProps = state => {
  console.log('GL state updated'); // state
  console.log(state); // state
  return {
    text: state.robotGLActions.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: (idx) => {
      dispatch(testAction(idx))
    }
  };
}

const RobotGLContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RobotGL)

export default RobotGLContainer
