import initialState from './initialState';
import { reducer as taggrTestAction } from './taggrTestAction';
import { reducer as deleteProject } from './deleteProject';
import { reducer as createProjectStart } from './createProjectStart';
import { reducer as createProjectFinish } from './createProjectFinish';

const reducers = [
  taggrTestAction,
  deleteProject,
  createProjectStart,
  createProjectFinish,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
