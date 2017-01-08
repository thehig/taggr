import {
  DONE_CREATING,
} from './constants';

export function doneCreating() {
  return {
    type: DONE_CREATING,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DONE_CREATING:
      return {
        ...state,
        creatingProject: false
      };

    default:
      return state;
  }
}
