import {
  CREATE_NEW_PROJECT,
} from './constants';

let projectIdCounter = 0;

export function createNewProject(name) {
  return {
    type: CREATE_NEW_PROJECT,
    payload: {
      name,
      id: projectIdCounter++
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case CREATE_NEW_PROJECT:
      // console.log(`${CREATE_NEW_PROJECT} Reducer: ${action.payload} State: ${JSON.stringify(state)}`);
      if(!action.payload.name) return state;
      return {
        ...state,
        projects: [...state.projects, {...action.payload}],
        creatingProject: true
      };

    default:
      return state;
  }
}
