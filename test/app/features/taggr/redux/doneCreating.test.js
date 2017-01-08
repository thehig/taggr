import { expect } from 'chai';

import {
  DONE_CREATING,
} from 'features/taggr/redux/constants';

import {
  doneCreating,
  reducer,
} from 'features/taggr/redux/doneCreating';

describe('taggr/redux/doneCreating', () => {
  it('action: doneCreating', () => {
    const expectedAction = {
      type: DONE_CREATING,
    };
    expect(doneCreating()).to.deep.equal(expectedAction);
  });

  it('reducer should handle DONE_CREATING', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DONE_CREATING }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
