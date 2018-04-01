export const TEST_ACTION = 'TEST_ACTION'
export const NEW_EDITOR = 'NEW_EDITOR'
export const CLOSE_EDITOR = 'CLOSE_EDITOR'
export const UPDATE_SRC_LIST = 'UPDATE_SRC_LIST'
export const UPDATE_SRC_CONTENTS = 'UPDATE_SRC_CONTENTS'
export const SET_IS_OPENING_PROJECT = 'SET_IS_OPENING_PROJECT'
export const SAVE_CODES = 'SAVE_CODES'
export const SET_CURRENT_FILE_INDEX = 'SET_CURRENT_FILE_INDEX'

export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function newEditor() {
  return {
    type: NEW_EDITOR,
  }
}

export function closeEditor(idx) {
  return {
    type: CLOSE_EDITOR,
    idx
  }
}

export function updateSrcList(list) {
  return {
    type: UPDATE_SRC_LIST,
    list
  }
}

export function updateSrcContents(codes) {
  return {
    type: UPDATE_SRC_CONTENTS,
    codes
  }
}

export function setIsOpeningProject(value) {
  return {
    type: SET_IS_OPENING_PROJECT,
    value
  }
}

export function saveCodes(codes) {
  return {
    type: SAVE_CODES,
    codes
  }
}

export function setCurrentFileIndex(index) {
  return {
    type: SET_CURRENT_FILE_INDEX,
    index
  }
}
