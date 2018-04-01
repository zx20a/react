import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader'

const mapStateToProps = state => {
  return {
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

const AppHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader)

export default AppHeaderContainer
