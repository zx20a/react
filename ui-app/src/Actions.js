export const CHANGE_VIEW = 'CHANGE_VIEW'
export const TEST_ACTION = 'TEST_ACTION'


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
