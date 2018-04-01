import * as actions from '../actions/SourceTabs'

const sourceTabsInitialState = {
  text: 'SrcTabsState',
  editorCount: 0,
  list: [],
  codes: [],
  isOpeningProject: false,
  currentFileIndex: 0
}

export function sourceTabsActions(state = sourceTabsInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    case actions.NEW_EDITOR:
      return Object.assign({}, state, {
        editorCount: state.editorCount+1,
      })
    case actions.CLOSE_EDITOR:
      return Object.assign({}, state, {
        editorCount: state.editorCount-1,
      })
    case actions.UPDATE_SRC_LIST:
      return Object.assign({}, state, {
        list: action.list
      })
    case actions.UPDATE_SRC_CONTENTS:
      return Object.assign({}, state, {
        codes: action.codes
      })
    case actions.SET_IS_OPENING_PROJECT:
      return Object.assign({}, state, {
        isOpeningProject: action.value
      })
    case actions.SET_CURRENT_FILE_INDEX:
      return Object.assign({}, state, {
        currentFileIndex: action.index
      })
    default:
      return state
  }
}
