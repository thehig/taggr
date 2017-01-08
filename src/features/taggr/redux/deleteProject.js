import {
  DELETE_PROJECT,
} from './constants';

export function deleteProject(id) {
  return {
    type: DELETE_PROJECT,
    payload: {
      id
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((item)=>{return item.id !== action.payload.id}),
      };

    default:
      return state;
  }
}
