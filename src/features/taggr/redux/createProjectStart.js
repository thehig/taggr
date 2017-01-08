import {
  CREATE_PROJECT_START,
} from './constants';

let projectIdCounter = 0;
export function createProjectStart(values) {
  return {
    type: CREATE_PROJECT_START,
    payload: {
      ...values,
      id: projectIdCounter++
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_PROJECT_START:
      return {
        ...state,
        projects: [...state.projects, {...action.payload}],
        creatingProject: true
      };

    default:
      return state;
  }
}