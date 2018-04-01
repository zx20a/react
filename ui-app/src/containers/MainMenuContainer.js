import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../Actions';
import {menuActions} from '../Reducers';
import MainMenu from '../components/MainMenu';


const mapStateToProps = state => {
  return {
    selectedView: state.menuActions.selectedView,
    open: state.menuActions.open,
    userName : state.menuActions.userName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuButtonClick: (idx) => {
      dispatch(actions.changeView(idx))
    },
    openMenu: () => {
      dispatch(actions.openMenu())
    },
    closeMenu: () => {
      dispatch(actions.closeMenu())
    }
  };
}

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MainMenuContainer
