export const TEST_ACTION = 'TEST_ACTION'
export const SAVE_CODE = "SAVE_CODE"
export const UNDO = "UNDO"
export const REDO = "REDO"

export function testAction(text) {
  return {
    type: TEST_ACTION,
    text
  }
}

export function saveCode(code) {
  return {
    type: SAVE_CODE,
    code
  }
}
