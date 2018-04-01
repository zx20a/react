import * as action from '../actions/RobotGL'

const robotGLInitialState = {
  text: 'RobotGL',
}

export function robotGLActions(state = robotGLInitialState, action) {
  switch (action.type) {
    case action.TEST_ACTION:
      return Object.assign({}, state, {
        text: action.text
      })
    case action.SAVE_CODE:
      return Object.assign({}, state, {
        text: action.code
      })
    default:
      return state
  }
}
