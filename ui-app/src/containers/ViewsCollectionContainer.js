import { connect } from 'react-redux';
import ViewsCollection from '../components/ViewsCollection'

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

const ViewsCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewsCollection)

export default ViewsCollectionContainer
