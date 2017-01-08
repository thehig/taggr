import initialState from './initialState';
import { reducer as taggrTestAction } from './taggrTestAction';
import { reducer as createNewProject } from './createNewProject';
import { reducer as deleteProject } from './deleteProject';

const reducers = [
  taggrTestAction,
  createNewProject,
  deleteProject,
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
