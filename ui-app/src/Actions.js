export const CHANGE_VIEW = 'CHANGE_VIEW'
export const OPEN_MENU = "OPEN_MENU"
export const CLOSE_MENU = "CLOSE_MENU"
export const TEST_ACTION = 'TEST_ACTION'
export const SAVE_CODE = "SAVE_CODE"
export const CHANGE_TAB = "CHANGE_TAB"
export const SET_PROJECT_LIST = "SET_PROJECT_LIST"


export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function changeView(index) {
  return {
    type: CHANGE_VIEW,
    index
  }
}

export function openMenu() {
  return {
    type: OPEN_MENU,
  }
}

export function closeMenu() {
  return {
    type: CLOSE_MENU,
  }
}

export function saveCode(code) {
  return {
    type: SAVE_CODE,
    code
  }
}

export function changeTab(idx) {
  return {
    type: CHANGE_TAB,
    idx
  }
}

// RLView
export function setProjectList(list) {
  return {
    type: SET_PROJECT_LIST,
    list
  }
}
