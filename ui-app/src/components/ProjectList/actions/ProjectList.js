export const TEST_ACTION = 'TEST_ACTION'
export const UPDATE_LIST = "UPDATE_LIST"
export const SET_OPEN_PROJECT = "SET_OPEN_PROJECT"

export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function updateList(list) {
  return {
    type: UPDATE_LIST,
    list
  }
}

export function setOpenProject(name) {
  return {
    type: SET_OPEN_PROJECT,
    name
  }
}
