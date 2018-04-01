import * as actions from '../actions/Menu'

const menuInitialState = {
  text: 'RlEditorMenuState',
  projectName: null,
}

export function menuActions(state = menuInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    case actions.SET_CURRENT_PROJECT:
      return Object.assign({}, state, {
        projectName: action.name
      })
    default:
      return state
  }
}
