import * as actions from '../actions/ProjectList'

const listInitialState = {
  text: 'listState',
  list: null,
  name: null,
}

export function projectListActions(state = listInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    case actions.UPDATE_LIST:
      return Object.assign({}, state, {
        list: action.list
      })
    case actions.SET_OPEN_PROJECT:
      return Object.assign({}, state, {
        name: action.name
      })
    default:
      return state
  }
}
