import { combineReducers } from 'redux'
import {CHANGE_VIEW, TEST_ACTION} from './Actions'


const initialState = {
  text: 'menuState',
  selectedView: 0,
}

const viewInitialState = {
  text: 'viewState',
  currentView: 0,
}

function menuActions(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        selectedView: action.index
      })
    case TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

function mainViewActions(state = viewInitialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    default:
      return state
  }
}

const appReducer = combineReducers({
  menuActions,
  mainViewActions
})

export default appReducer
