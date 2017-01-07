import { expect } from 'chai';

import {
  TAGGR_TEST_ACTION,
} from 'features/taggr/redux/constants';

import {
  taggrTestAction,
  reducer,
} from 'features/taggr/redux/taggrTestAction';

describe('taggr/redux/taggrTestAction', () => {
  it('action: taggrTestAction', () => {
    const expectedAction = {
      type: TAGGR_TEST_ACTION,
    };
    expect(taggrTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle TAGGR_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TAGGR_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
