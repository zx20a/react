export const TEST_ACTION = 'TEST_ACTION'
export const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT"
export const UNDO = "UNDO"
export const REDO = "REDO"

export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function setCurrentProject(name) {
  return {
    type: SET_CURRENT_PROJECT,
    name
  }
}
