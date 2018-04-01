import { combineReducers } from 'redux'
import { projectListActions } from './ProjectList'

const ProjectListReducer = combineReducers({
  projectListActions,
})

export default ProjectListReducer
