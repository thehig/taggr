import {
  CREATE_NEW_PROJECT,
} from './constants';

let projectIdCounter = 0;

export function createNewProject(values) {
  return {
    type: CREATE_NEW_PROJECT,
    payload: {
      ...values,
      id: projectIdCounter++
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_NEW_PROJECT:
      return {
        ...state,
        projects: [...state.projects, {...action.payload}],
        creatingProject: true
      };

    default:
      return state;
  }
}
