import { combineReducers } from 'redux'
import * as actions from './Actions'
import ProjectListReducer from './components/ProjectList/reducers'
import RlEditorReducer from './components/RlEditor/reducers'

const headerInitialState = {
  text: 'headerState',
}

const menuInitialState = {
  text: 'menuState',
  selectedView: 1,
  open: true,
  userName: 'userName',
}

const viewInitialState = {
  text: 'viewState',
  currentView: 1,
}

const rlViewInitialState = {
  currentTab: 0,
}

function menuActions(state = menuInitialState, action) {
  switch (action.type) {
    case actions.CHANGE_VIEW:
      return Object.assign({}, state, {
        selectedView: action.index
      })
    case actions.OPEN_MENU:
      return Object.assign({}, state, {
        open: true
      })
    case actions.CLOSE_MENU:
      return Object.assign({}, state, {
        open: false
      })
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}
function headerActions(state = viewInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

function mainViewActions(state = viewInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

function rlViewActions(state = rlViewInitialState, action) {
  switch (action.type) {
    case actions.CHANGE_TAB:
      return Object.assign({}, state, {
        currentTab: action.idx
      })
    case actions.SET_PROJECT_LIST:
      return Object.assign({}, state, {
        projectList: action.list
      })
    default:
      return state
  }
}

const appReducer = combineReducers({
  menuActions,
  mainViewActions,
  rlViewActions,
  ProjectListReducer,
  RlEditorReducer
})

export default appReducer
