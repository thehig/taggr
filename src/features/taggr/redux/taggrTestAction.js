import {
  TAGGR_TEST_ACTION,
} from './constants';

export function taggrTestAction() {
  return {
    type: TAGGR_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TAGGR_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
