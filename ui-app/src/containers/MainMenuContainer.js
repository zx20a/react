import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { changeView, testAction } from '../Actions';
import {menuActions} from '../Reducers';
import MainMenu from '../components/MainMenu';


const mapStateToProps = state => {
  console.log('MainMenu state updated'); // state
  console.log(state); // state
  return {
    selectedView: state.menuActions.selectedView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuButtonClick: (idx) => {
      dispatch(changeView(idx))
    }
  };
}

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MainMenuContainer
