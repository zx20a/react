export const TEST_ACTION = 'TEST_ACTION'
export const SAVE_CODE = "SAVE_CODE"
export const CLEAR_CODE = "CLEAR_CODE"
export const CLEAR_CODES = "CLEAR_CODES"
export const UNDO = "UNDO"
export const REDO = "REDO"

export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function saveCode(idx, code) {
  return {
    type: SAVE_CODE,
    idx,
    code
  }
}

export function clearCode(idx) {
  return {
    type: CLEAR_CODE,
    idx,
  }
}

export function clearCodes() {
  return {
    type: CLEAR_CODES,
  }
}
