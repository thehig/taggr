import {
  CREATE_PROJECT_FINISH,
} from './constants';

export function createProjectFinish() {
  return {
    type: CREATE_PROJECT_FINISH,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_PROJECT_FINISH:
      return {
        ...state,
        creatingProject: false
      };

    default:
      return state;
  }
}
