import * as actions from '../actions/Editor'

const editorInitialState = {
  text: 'EditorState',
  editorCount: 0,
  codes: [],
}

export function editorActions(state = editorInitialState, action) {
  switch (action.type) {
    case actions.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    case actions.SAVE_CODE:
    console.log('SAVECODE')
    console.log(action)
      state.codes.splice(action.idx, 1);
      state.codes.splice(action.idx, 0, action.code);
      return Object.assign({}, state, {
        codes: state.codes
      })
    case actions.CLEAR_CODE:
      if (action.idx > -1) {
        state.codes.splice(action.idx, 1);
      }
      return Object.assign({}, state, {
        codes: state.codes
      })
    case actions.CLEAR_CODES:
      return Object.assign({}, state, {
        codes: []
      })
    default:
      return state
  }
}
