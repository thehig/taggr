import { expect } from 'chai';

import {
  DELETE_PROJECT,
} from 'features/taggr/redux/constants';

import {
  deleteProject,
  reducer,
} from 'features/taggr/redux/deleteProject';

describe('taggr/redux/deleteProject', () => {
  it('action: deleteProject', () => {
    const expectedAction = {
      type: DELETE_PROJECT,
    };
    expect(deleteProject()).to.deep.equal(expectedAction);
  });

  it('reducer should handle DELETE_PROJECT', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DELETE_PROJECT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
