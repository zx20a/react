import { combineReducers } from 'redux'
import {menuActions} from './Menu'
import {editorActions} from './Editor'
import {sourceTabsActions} from './SourceTabs'

const RlEditorReducer = combineReducers({
  menuActions,
  sourceTabsActions,
  editorActions
})

export default RlEditorReducer
