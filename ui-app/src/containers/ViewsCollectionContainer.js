import { connect } from 'react-redux';
import ViewsCollection from '../components/ViewsCollection'

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

const ViewsCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewsCollection)

export default ViewsCollectionContainer
